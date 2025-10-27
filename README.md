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

# 🧮 3. Base de datos en MySQL

El sistema utiliza MySQL como base de datos principal.
A continuación se muestra una estructura básica de tablas:

- CREATE DATABASE optialmologic_clinic;

USE optialmologic_clinic;

CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    telefono VARCHAR(20),
    fecha_nacimiento DATE
);

CREATE TABLE medicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    especialidad VARCHAR(100),
    telefono VARCHAR(20)
);

CREATE TABLE citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT,
    id_medico INT,
    fecha DATE,
    hora TIME,
    estado VARCHAR(50),
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
    FOREIGN KEY (id_medico) REFERENCES medicos(id)
);


---

### 🧩 1. Instalar dependencias de Node.js (Frontend)

Ejecuta el siguiente comando dentro de la carpeta del proyecto:

```bash
npm install
