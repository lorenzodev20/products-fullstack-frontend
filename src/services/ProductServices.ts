import { safeParse } from "valibot";
import { DraftProductSchema, ProductSchema, ProductsSchema, type Product } from "../types";
import axios from "axios";
import { toBoolean } from "../utils";

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        });

        if (result.success) {

            const url = `${import.meta.env.VITE_API_URL}/api/products`;

            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            });
        } else {
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error);
    }
}

export async function updateProduct(data: ProductData, id: Product['id']) {

    const result = safeParse(ProductSchema, {
        id: +id,
        name: data.name,
        price: +data.price,
        availability: toBoolean(data.availability.toString())
    });
    if (result.success) {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

        await axios.put(url, {
            name: result.output.name,
            price: result.output.price,
            availability: result.output.availability
        });
    } else {
        console.error(result);
        throw new Error('Datos no validos', { cause: result });
    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductsSchema, data.data);
        if (!result.success) {
            throw new Error("API Error!");
        }
        return result.output;
    } catch (error) {
        console.log(error);
    }
}

export async function getProductById(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductSchema, data.data);
        console.info(result);
        if (!result.success) {
            throw new Error("API Error!");
        }
        return result.output;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteProduct(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
        throw new Error("Service call api error");

    }
}

export async function updateAvailability(id: Product['id'], availability: Product['availability']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        await axios.patch(url, { availability });
    } catch (error) {
        console.log(error);
    }
}