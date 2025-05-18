// backend/config.js
// backend/config.js
module.exports = {
  email: {
    host: process.env.EMAIL_HOST || "smtp.mailtrap.io", // Nuevo
    port: process.env.EMAIL_PORT || 2525, // Nuevo
    auth: {
      user: process.env.EMAIL_USER || "0fe45fba9265dc", // Reemplaza esto
      pass: process.env.EMAIL_PASSWORD || "343511bc1174da", // Reemplaza esto
    },
    from: process.env.EMAIL_FROM || "contacto@sixbridge.cl",
  },
};
