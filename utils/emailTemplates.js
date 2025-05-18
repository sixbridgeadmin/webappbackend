// backend/emailTemplates.js
module.exports = {
  welcome: (name) => `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bienvenido</title>
    </head>
    <body>
      <h1>¡Bienvenido a nuestra plataforma!</h1>
      <p>Hola ${name},</p>
      <p>Gracias por registrarte en nuestra webapp. Estamos emocionados de tenerte con nosotros.</p>
      <p>Saludos,<br>El equipo de soporte</p>
    </body>
    </html>
  `,
  newOrder: (name, numeropedido, productos, subtotal, envio, total) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr>
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
          <td>$${producto.precio.toLocaleString()}</td>
          <td>$${producto.total.toLocaleString()}</td>
        </tr>
      `
      )
      .join("");

    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Solicitud de Pago a Sixbridge N° pedido ${numeropedido}</title>
    </head>
    <body>
      <h1>¡Tu pedido ha sido creado!</h1>
      <p>Estimado ${name}:<br>
      Para hacer efectiva su compra, recordamos realizar el pago de su pedido N° ${numeropedido}, por un monto total de $${total.toLocaleString()} correspondiente al siguiente detalle:</p>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${productosHTML}
        </tbody>
      </table>
      <p><a href="https://www.webpay.cl/company/153129?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal">Pagar “aquí” https://www.webpay.cl/company/153129?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal</a></p>
      <h3>Resumen:</h3>
      <p>Monto Compra: $${subtotal.toLocaleString()}</p>
      <p>Monto Envío: $${envio.toLocaleString()}</p>
      <p>Monto Total a Pagar: $${total.toLocaleString()}</p>

      <p>Ante cualquier duda contáctenos al número “xxxxxxx” (símbolo de wassap o teléfono)<br>Atte., Sixbridge SPA</p>
    </body>
    </html>
  `;
  },
  newOrderUs: (name, numeropedido, total) => `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generación Pedido N° ${numeropedido}</title>
    </head>
    <body>
      <h1>¡Tu pedido ha sido creado!</h1>
      <p>Hola ${name},</p>
      <p>Administrador, se ha generado el pedido N° ${numeropedido}, por un monto de $${total}</p>

      <p>Sixbridge SPA</p>
    </body>
    </html>
  `,
  orderStatusUpdated: (name, numeropedido, productos, estado) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr>
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
        </tr>
      `
      )
      .join("");

    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo pedido N° ${numeropedido}, ESTADO: ${estado}</title>
    </head>
    <body>
      <h1>¡Tienes un nuevo pedido!</h1>
      <p>Estimado Proveedor ${name}:<br>
      Se solicita preparar el siguiente pedido: N° ${numeropedido}, correspondiente al siguiente detalle:</p>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          ${productosHTML}
        </tbody>
      </table>

      <p>Ante cualquier duda contáctenos al número “xxxxxxx” (símbolo de wassap o teléfono)<br>Atte., Sixbridge SPA</p>
    </body>
    </html>
  `;
  },
  orderStatusUpdatedObs: (
    nombre,
    numeropedido,
    estado,
    productos,
    subtotal,
    envio,
    total,
    fechaAprobacion
  ) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr>
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
          <td>$${producto.precio.toLocaleString()}</td>
          <td>$${producto.total.toLocaleString()}</td>
        </tr>
      `
      )
      .join("");

    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo pedido N° ${numeropedido}, ESTADO: ${estado}</title>
    </head>
    <body>
      <h1>¡Tienes un nuevo pedido!</h1>
      <p>Estimado Vendedor ${nombre}:<br>
      Se solicita preparar el siguiente pedido: N° ${numeropedido}, correspondiente al siguiente detalle:</p>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${productosHTML}
        </tbody>
      </table>
      <h3>Resumen:</h3>
      <p>Monto Compra: $${subtotal.toLocaleString()}</p>
      <p>Monto Envío: $${envio.toLocaleString()}</p>
      <p>Monto Total a Pagar: $${total.toLocaleString()}</p>
      <p>Fecha: ${fechaAprobacion}</p>

      <p>Ante cualquier duda contáctenos al número “xxxxxxx” (símbolo de wassap o teléfono)<br>Atte., Sixbridge SPA</p>
    </body>
    </html>
  `;
  },
};
