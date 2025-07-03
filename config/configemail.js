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
    host: process.env.EMAIL_SERVICE,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    from: process.env.EMAIL_FROM,
  },
};

