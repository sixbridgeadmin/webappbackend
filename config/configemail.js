// backend/config.js
/*module.exports = {
  email: {
    host: process.env.EMAIL_HOST || "cp7101.webempresa.eu", // Nuevo
    port: process.env.EMAIL_PORT || 465, // Nuevo
    secure: true, // Para puerto 465
    auth: {
      user: process.env.EMAIL_USER || "contacto@sixbridge.cl", // Reemplaza esto
      pass: process.env.EMAIL_PASSWORD || "Sixbridge2025.", // Reemplaza esto
    },
    from: process.env.EMAIL_FROM || "contacto@sixbridge.cl",
  },
};*/

module.exports = {
  email: {
    host: "cp7101.webempresa.eu", // Host de Webempresa
    port: 465, // Puerto seguro SSL
    secure: true, // true para puerto 465 (SSL)
    auth: {
      user: "contacto@sixbridge.cl", // Tu usuario real
      pass: "Sixbridge_2025"
    },
    from: "contacto@sixbridge.cl",
  },
};

