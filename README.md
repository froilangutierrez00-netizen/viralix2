# Viralix - Marketing Gastronómico

Plataforma web moderna para servicios de marketing digital especializado en restaurantes, desarrollada con React, TypeScript, Vite y TailwindCSS.

## Cómo correr el proyecto

### Prerequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js)

### Instalación

1. **Clona el repositorio** (o descarga el código fuente)
   ```bash
   git clone <url-del-repositorio>
   cd viralix2
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

### Comandos disponibles

```bash
# Iniciar servidor de desarrollo (con hot reload)
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción localmente
npm run preview

# Ejecutar linter (verificar código)
npm run lint
```

### Uso en desarrollo

1. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Abre tu navegador en:** `http://localhost:5173`

3. **Modo Hot Reload:** Los cambios que hagas en el código se reflejarán automáticamente en el navegador sin necesidad de recargar la página.

### Build de producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/` listos para ser desplegados.

Para probar el build de producción localmente:

```bash
npm run preview
```

## 🛠️ Stack Tecnológico

- **React 19** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **TailwindCSS 4** - Framework de CSS utility-first
- **Lucide React** - Librería de iconos
- **React Router DOM** - Enrutamiento
- **ConfigCat** - Feature flags
- **Axios** - Cliente HTTP

## 📁 Estructura del proyecto

```
viralix2/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── config/         # Archivos de configuración JSON
│   ├── contexts/       # Context providers (Auth, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── models/         # Tipos e interfaces TypeScript
│   └── App.tsx         # Componente raíz
├── public/             # Archivos estáticos
└── index.html         # HTML principal

```


