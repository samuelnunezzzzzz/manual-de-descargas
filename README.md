# 🏥 Optialmologic Clinic

Proyecto formativo enfocado en el desarrollo de una aplicación web para una clínica oftalmológica.  
Incluye módulos para agendamiento de citas, historial clínico y recordatorios automatizados.

---

## 📋 Descripción

**Optialmologic Clinic** es un sistema web que busca mejorar la gestión de pacientes y citas en consultorios oftalmológicos.  
El proyecto permite:

- Registrar pacientes y médicos.  
- Agendar, consultar y cancelar citas.  
- Consultar historial clínico.  
- Enviar recordatorios automáticos de citas.  

---

## 🧠 Tecnologías utilizadas

- ⚛️ **React 19** – Librería principal para construir la interfaz.  
- ⚡ **Vite 7** – Entorno rápido de desarrollo.  
- 🎨 **TailwindCSS 4** – Framework CSS para diseño responsivo y moderno.  
- 🧭 **React Router DOM 7** – Manejo de rutas y navegación.  
- 🪄 **React Magic Motion** – Animaciones suaves y fluidas.  
- 🧩 **Lucide React** – Iconografía moderna y ligera.  
- 🧹 **ESLint** – Linter para mantener el código limpio.  

---

### 🧩 Dependencias principales

**Frontend (React):**
- React, React DOM, React Router DOM  
- Tailwind CSS para estilos  
- Lucide React (iconos)  
- React Magic Motion (animaciones)  
- Vite (entorno de desarrollo rápido)

**Backend (Python):**
- `mysql-connector-python`: para conectar con bases de datos MySQL.  
- `pyjwt`: para manejo de tokens de autenticación (JSON Web Tokens).

---
{
  "name": "ophthalmology_clinic",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.542.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-magic-motion": "^1.1.2",
    "react-router-dom": "^7.9.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@tailwindcss/cli": "^4.1.12",
    "@tailwindcss/postcss": "^4.1.12",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.1.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.14",
    "vite": "^7.1.2"

    python -m pip install mysql-connector-python
    pip install pyjwt
  }
}
### ⚙️ Instalación

1. Instala las dependencias de Node:
   ```bash
   npm install
