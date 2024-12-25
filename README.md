
# 🦊 **DApp - Decentralized Application**

Esta es una **DApp (Aplicación Descentralizada)** construida utilizando **React**, **Next.js**, **Thirdweb**, **Ether.js**, y otras tecnologías. Permite a los usuarios conectar sus wallets, interactuar con contratos inteligentes.
---

## 🚀 **Tecnologías Utilizadas**

Las tecnologías principales utilizadas en este proyecto son:

- **Next.js**: Framework para aplicaciones React con soporte para renderizado en el lado del servidor (SSR) y generación de sitios estáticos (SSG).
- **React**: Biblioteca de JavaScript para construir interfaces de usuario dinámicas.
- **Thirdweb**: Herramienta para crear aplicaciones descentralizadas de forma sencilla y conectar con contratos inteligentes.
- **Ether.js**: Biblioteca para interactuar con la blockchain de Ethereum y gestionar wallets.
- **MetaMask**: Extensión de navegador que permite interactuar con aplicaciones descentralizadas mediante la gestión de wallets.
- **Tailwind CSS**: Framework de CSS para facilitar el diseño rápido y flexible.
- **Node.js**: Entorno de ejecución de JavaScript en el servidor.

---

## 🛠 **Requisitos Previos**

Para poder ejecutar y usar esta aplicación localmente, necesitas asegurarte de que tengas configurado lo siguiente:

### 1. **Instalar MetaMask**
La aplicación necesita la extensión de **MetaMask** instalada en tu navegador para poder conectarte a una wallet y realizar transacciones.

- Dirígete a la [página de MetaMask](https://metamask.io/) y sigue las instrucciones para instalar la extensión en tu navegador (Chrome, Firefox, Brave, etc.).
- Crea una nueva wallet o importa una wallet existente con tus claves de recuperación.
- Asegúrate de que tienes **ETH o AVAX** en tu cuenta de MetaMask, ya que algunas interacciones con contratos inteligentes requieren saldo para pagar las tarifas de transacción (gas fees).

### 2. **Configurar la Red de MetaMask**
Este proyecto está configurado para la **red Avalanche C-Chain**. Asegúrate de que MetaMask esté configurado para conectarse a esta red.

- Abre MetaMask y selecciona la red **Avalanche C-Chain**.
- Si no tienes AVAX en tu cuenta, puedes obtenerlo desde un [faucet de Avalanche](https://faucet.avax.network/).
  
Configura la red Avalanche C-Chain en MetaMask con los siguientes parámetros:

- **Red Name**: Avalanche C-Chain
- **New RPC URL**: `https://api.avax.network/ext/bc/C/rpc`
- **Chain ID**: `43114`
- **Symbol**: AVAX
- **Block Explorer URL**: [https://snowtrace.io/](https://snowtrace.io/)

---

## 📦 **Instalación Local**

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

### 1. **Clonar el Repositorio**

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/rua1030/wallet.git
```

### 2. **Instalar Dependencias**
Accede a la carpeta del proyecto e instala las dependencias utilizando npm o yarn:

```bash
cd dapp
npm install
```

Si prefieres usar Yarn:

```bash
yarn install
```

### 3. **Configurar el Entorno**
Crea un archivo `.env` en la raíz del proyecto y agrega las variables de entorno necesarias. Este archivo debería contener la dirección de tu contrato inteligente y otros detalles de configuración:

```bash
NEXT_PUBLIC_CLIENT_ID=0x31Ec3D576F25B503A09b9564Ac23E48a73f6939c

```

Asegúrate de reemplazar los valores de ejemplo con los tuyos.

### 4. **Ejecutar el Servidor de Desarrollo**
Para comenzar el servidor de desarrollo y ver la DApp en tu navegador, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor en `http://localhost:3000`. Abre esta URL en tu navegador para ver la aplicación.

---

## 👨‍💻 **Autor**

Juan David Rua - Desarrollador

📬 Contacto: juandavidruaisaza@email.com
