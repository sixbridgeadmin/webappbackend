const nodemailer = require("nodemailer");
const config = require("../config/configemail");
const emailTemplates = require("../utils/emailTemplates");

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  auth: {
    user: config.email.auth.user,
    pass: config.email.auth.pass,
  },
});

const sendEmail = async (to, subject, templateName, replacements) => {
  if (!to) {
    throw new Error("No se ha especificado ningún destinatario (to)");
  }

  // Obtener la plantilla específica
  const template = emailTemplates[templateName];
  if (!template) {
    throw new Error(`Plantilla ${templateName} no encontrada`);
  }

  // Generar el HTML con los parámetros NOMBRADOS
  const html = template(
    replacements.name, // parámetro 1: nombre
    replacements.numeropedido, // parámetro 2: número de pedido
    replacements.productos, // parámetro 3: array de productos
    replacements.subtotal, // parámetro 4: subtotal
    replacements.envio, // parámetro 5: costo de envío
    replacements.total // parámetro 6: total
  );

  const mailOptions = {
    from: config.email.from,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Correo enviado a ${to}`);
  } catch (error) {
    console.error("Error enviando correo:", error);
    throw error;
  }
};

module.exports = sendEmail;
