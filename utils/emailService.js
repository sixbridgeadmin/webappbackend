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

  let html;
  
  // Manejar diferentes templates según sus parámetros específicos
  switch (templateName) {
    case "welcome":
      html = template(replacements.name);
      break;
    case "newOrder":
      html = template(
        replacements.name,
        replacements.numeropedido,
        replacements.productos,
        replacements.subtotal,
        replacements.envio,
        replacements.total
      );
      break;
    case "newOrderUs":
      html = template(
        replacements.name,
        replacements.numeropedido,
        replacements.total
      );
      break;
    case "orderStatusUpdated":
      html = template(
        replacements.name,
        replacements.numeropedido,
        replacements.productos,
        replacements.estado
      );
      break;
    case "orderStatusUpdatedObs":
      html = template(
        replacements.nombre,
        replacements.numeropedido,
        replacements.estado,
        replacements.productos,
        replacements.subtotal,
        replacements.envio,
        replacements.total,
        replacements.fechaAprobacion
      );
      break;
    case "orderApprovedClient":
      html = template(
        replacements.numeropedido,
        replacements.productos
      );
      break;
    case "orderApprovedProvider":
      html = template(
        replacements.name,
        replacements.numeropedido,
        replacements.productos
      );
      break;
    case "orderStatusUpdatedObsVendor":
      html = template(
        replacements.nombre,
        replacements.numeropedido,
        replacements.productos,
        replacements.total
      );
      break;
    case "stockBajo":
      html = template(
        replacements.nombreProducto,
        replacements.existenciaActual,
        replacements.umbralStockBajo,
        replacements.fecha
      );
      break;
    default:
      // Para templates que usan parámetros posicionales genéricos
      html = template(
        replacements.name,
        replacements.numeropedido,
        replacements.productos,
        replacements.subtotal,
        replacements.envio,
        replacements.total
      );
  }

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
