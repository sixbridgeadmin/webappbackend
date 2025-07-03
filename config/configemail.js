// backend/config.js
module.exports = {
  email: {
    host: process.env.EMAIL_HOST || "cp7101.webempresa.eu", // Host de Webempresa
    port: process.env.EMAIL_PORT || 465, // Puerto seguro SSL
    secure: true, // true para puerto 465 (SSL)
    auth: {
      user: process.env.EMAIL_USER || "contacto@sixbridge.cl", // Solo variable de entorno
      pass: process.env.EMAIL_PASSWORD || "Sixbridge_2025"// Solo variable de entorno
    },
    from: process.env.EMAIL_FROM || "contacto@sixbridge.cl",
  },
};

