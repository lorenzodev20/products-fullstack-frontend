# Administrador de Productos - Cliente

Aplicación React para la gestión de productos, permite crear, leer, actualizar y eliminar productos, así como controlar su disponibilidad en inventario.

## 🛠️ Tecnologías Clave

- **React** `^19.x`
- **TypeScript**
- **Vite** para bundling y desarrollo rápido
- **Tailwind CSS** para estilos
- **React Router DOM** `^7.x` para enrutamiento
- **Axios** para peticiones HTTP
- **Valibot** para validación de esquemas

## ✨ Características

- **Listar Productos**: Visualización de todos los productos en una tabla
- **Crear Producto**: Formulario para agregar nuevos productos con nombre y precio
- **Editar Producto**: Modificar información de productos existentes
- **Eliminar Producto**: Remover productos del sistema
- **Gestión de Disponibilidad**: Actualizar el estado de disponibilidad de productos
- **Validación de Datos**: Esquemas de validación con Valibot
- **Diseño Responsivo**: Interfaz adaptable con Tailwind CSS

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ErrorMessage.tsx
│   ├── ProductDetail.tsx
│   └── ProductForm.tsx
├── layouts/            # Layouts de la aplicación
│   └── Layout.tsx
├── services/           # Servicios para consumo de API
│   └── ProductServices.ts
├── types/              # Definiciones de tipos TypeScript
│   └── index.ts
├── utils/              # Funciones utilitarias
├── views/              # Vistas/Páginas principales
│   ├── EditProduct.tsx
│   ├── NewProduct.tsx
│   └── Products.tsx
├── main.tsx           # Punto de entrada de la aplicación
└── router.tsx         # Configuración de rutas
```

## 📦 Instalación

```bash
# Clona el repositorio
git clone <URL_DEL_REPOSITORIO>

# Entra al directorio del proyecto
cd client

# Instala las dependencias
npm install

# Configura las variables de entorno
# Crea un archivo .env.local y agrega:
# VITE_API_URL=http://localhost:4000

# Inicia la app en desarrollo
npm run dev
```

## 🚀 Scripts Disponibles

- `npm run dev`: Inicia la aplicación en modo desarrollo con Vite
- `npm run build`: Compila el proyecto (`tsc -b`) y genera el build de producción
- `npm run lint`: Ejecuta ESLint para analizar el código
- `npm run preview`: Previsualiza el build de producción localmente

## 🔌 API Backend

Esta aplicación frontend se conecta a una API REST backend. Asegúrate de:

1. Tener el servidor backend corriendo
2. Configurar la variable de entorno `VITE_API_URL` con la URL de tu API
3. La API debe implementar los siguientes endpoints:
   - `GET /api/products` - Listar productos
   - `POST /api/products` - Crear producto
   - `GET /api/products/:id` - Obtener producto por ID
   - `PUT /api/products/:id` - Actualizar producto
   - `PATCH /api/products/:id` - Actualizar disponibilidad
   - `DELETE /api/products/:id` - Eliminar producto

## 🎨 Componentes Principales

### ProductServices
Servicio que maneja todas las peticiones HTTP a la API utilizando Axios y valida las respuestas con Valibot.

### Router
Configuración de rutas usando React Router DOM con patrón ROA (Resource Oriented Architecture).

### Schemas
Definición de esquemas de validación con Valibot para garantizar la integridad de los datos.

## 📝 Licencia

Este proyecto es privado y está en desarrollo.
