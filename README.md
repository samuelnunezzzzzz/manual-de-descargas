# 🏥 Optialmologic Clinic

# 🏥 Optialmologic Clinic

**Optialmologic Clinic** es un proyecto formativo enfocado en el desarrollo de una aplicación web moderna para una **clínica oftalmológica**.  
Su objetivo es optimizar la gestión de pacientes, citas médicas y registros clínicos mediante herramientas tecnológicas modernas y de código abierto.

---

## 💼 Acerca de la empresa

**Optialmologic Clinic** es una empresa dedicada al cuidado integral de la salud visual, comprometida con ofrecer atención médica de calidad, tecnología de vanguardia y un servicio humano centrado en las necesidades de cada paciente.  
Desde nuestros inicios, hemos trabajado con el propósito de prevenir, diagnosticar y tratar enfermedades oculares a través de procesos clínicos eficientes y una atención personalizada.

Nuestra clínica combina la experiencia de profesionales altamente capacitados con herramientas digitales modernas que permiten optimizar la gestión de citas, el seguimiento médico y el acceso rápido al historial clínico de cada paciente.  
Gracias a nuestro enfoque innovador, los usuarios pueden agendar sus consultas de manera sencilla, recibir recordatorios automáticos y mantener una comunicación constante con su especialista.

En **Optialmologic Clinic** creemos firmemente que una buena visión es esencial para una vida plena.  
Por eso, implementamos un sistema de atención integral que busca no solo tratar problemas visuales, sino también educar a la comunidad sobre la importancia de los controles preventivos y el cuidado ocular diario.

Nuestro compromiso es seguir creciendo con ética, transparencia y responsabilidad, incorporando tecnologías inteligentes que mejoren la experiencia del paciente y fortalezcan la confianza en nuestros servicios.

> 💬 *Con Optialmologic Clinic, ver bien es vivir mejor.* 👁️✨

---

## 🧾 Funciones principales

- 👩‍⚕️ Registro de médicos y pacientes.  
- 📅 Agendamiento, consulta y cancelación de citas.  
- 📋 Acceso al historial clínico.  
- 🔔 Envío de recordatorios automáticos de citas.  
- 🔐 Autenticación segura mediante JWT.  
- 💾 Conexión directa a base de datos MySQL para gestión eficiente de información.  

---

## 🧠 Tecnologías utilizadas

### ⚛️ **Frontend (Interfaz de Usuario)**

- **React 19** – Librería principal para construir la interfaz.  
- **Vite 7** – Entorno de desarrollo rápido y moderno.  
- **TailwindCSS 4** – Framework CSS para estilos responsivos y modernos.  
- **React Router DOM 7** – Sistema de navegación entre páginas.  
- **React Magic Motion** – Animaciones suaves y fluidas.  
- **Lucide React** – Iconografía elegante y ligera.  
- **ESLint** – Linter para mantener el código limpio y uniforme.

---

### 🐍 **Backend (Lógica y Base de Datos)**

- **Python 3** – Lenguaje de programación para la capa lógica.  
- **MySQL Connector** – Para conectar la base de datos MySQL.  
- **PyJWT** – Para la gestión segura de autenticación mediante tokens.  

---

## ⚙️ Instalación y configuración del entorno

Para ejecutar correctamente el proyecto **Optialmologic Clinic**, es necesario instalar las dependencias tanto del **frontend (React + Vite)** como del **backend (Python + MySQL)**.  
A continuación se explica paso a paso cómo hacerlo y qué función cumple cada dependencia.

## 🧱 Modelo de Base de Datos

La base de datos **optialmologic_clinic** incluye las siguientes tablas:

- **pacientes:** almacena la información personal de cada paciente.  
- **medicos:** contiene los datos de los profesionales de la clínica.  
- **citas:** relaciona pacientes con médicos, con fecha y hora de atención.  



## ⚛️ Instalación de dependencias del Frontend (React + Vite)

Para configurar correctamente el entorno del **frontend**, asegúrate de estar dentro de la carpeta `/frontend` del proyecto antes de ejecutar los comandos.

### 🧩 1. React 19
Librería principal para construir la interfaz de usuario.

```bash
npm install react react-dom

## ⚡ 2. Vite 7 

Entorno de desarrollo rápido y moderno que reemplaza a Create React App.
```bash
 npm create vite@latest

- Selecciona React y JavaScript cuando te lo pregunte.

## 🎨 3. TailwindCSS 4
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

#🧭 4. React Router DOM 7
```bash
npm install react-router-dom

## 🖼️ 6. Lucide React

-   Iconografía moderna y ligera.
```bash
npm install lucide-react


#🧹 7. ESLint
-Herramienta para mantener el código limpio y detectar errores.
```bash
npm install eslint --save-dev
npx eslint --init


## 🐍 Backend (Lógica y Base de Datos)

El backend del proyecto **Optialmologic Clinic** está desarrollado con **Python 3**, encargado de manejar la lógica del sistema, la conexión con la base de datos y la autenticación de los usuarios.

A continuación se explican las dependencias principales y cómo instalarlas y ejecutarlas correctamente.

---

### 🐍 1. Python 3
Lenguaje de programación utilizado para la capa lógica y la conexión con el servidor de base de datos.

> Python permite crear APIs seguras, rápidas y fáciles de mantener que gestionan las operaciones del sistema como citas, pacientes y médicos.

Verifica que esté instalado con:

```bash
python --version

## 💾 2. MySQL Connector
-Librería oficial que permite conectar Python con una base de datos MySQL.
```bash
python -m pip install mysql-connector-python

- Esta dependencia permite a la aplicación conectarse con la base de datos donde se almacenan los pacientes, médicos y citas.

##🔐 3. PyJWT (JSON Web Tokens)

- Instalación:
```bash
  pip install pyjwt

### Relaciones:
- Un **médico** puede tener **muchas citas**.
- Un **paciente** puede tener **varias citas**.


## 📈 Futuras mejoras

- Integrar sistema de notificaciones por correo.  
- Añadir control de roles (Administrador / Médico / Paciente).  
- Implementar recuperación de contraseña.  
- Conectar con API de WhatsApp para recordatorios automáticos.  
---

### 🧩 1. Instalar dependencias de Node.js (Frontend)

Ejecuta el siguiente comando dentro de la carpeta del proyecto:

```bash
npm install
