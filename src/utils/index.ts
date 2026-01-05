
export function formatCurrency(amount: number, currency: string = 'COP') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency
    }).format(amount)
}

export function toBoolean(str: string) {
    return str.toLowerCase() === "true";
}