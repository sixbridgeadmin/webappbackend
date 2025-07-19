// backend/emailTemplates.js
module.exports = {
  welcome: (name) => `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>¡Bienvenido a Sixbridge SPA!</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #007bff;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #007bff;
          margin: 0;
          font-size: 28px;
        }
        .welcome-message {
          background-color: #e8f4fd;
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #007bff;
        }
        .welcome-message h2 {
          margin: 0 0 15px 0;
          color: #007bff;
          font-size: 22px;
        }
        .features {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .features h3 {
          color: #495057;
          margin: 0 0 15px 0;
        }
        .features ul {
          margin: 0;
          padding-left: 20px;
        }
        .features li {
          margin: 8px 0;
          color: #666;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .welcome-badge {
          display: inline-block;
          background-color: #28a745;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Sixbridge SPA</h1>
          <p>¡Bienvenido a nuestra plataforma de gestión!</p>
        </div>
        
        <div class="welcome-message">
          <h2>¡Hola ${name}!</h2>
          <p>Nos complace darte la bienvenida a <span class="welcome-badge">Sixbridge SPA</span>. Tu cuenta ha sido creada exitosamente y ya puedes comenzar a utilizar todos nuestros servicios.</p>
        </div>
        
        <div class="features">
          <h3>🚀 ¿Qué puedes hacer en nuestra plataforma?</h3>
          <ul>
            <li>Gestionar pedidos y productos</li>
            <li>Realizar seguimiento de inventario</li>
            <li>Comunicarte con proveedores y clientes</li>
            <li>Acceder a reportes y estadísticas</li>
            <li>Recibir notificaciones automáticas</li>
          </ul>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Estamos aquí para ayudarte a crecer tu negocio</p>
          <p style="font-size: 12px; color: #999;">Si tienes alguna pregunta, no dudes en contactarnos.</p>
        </div>
      </div>
    </body>
    </html>
  `,
  newOrder: (name, numeropedido, productos, subtotal, envio, total) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; text-align: left;">${producto.nombre}</td>
          <td style="padding: 12px; text-align: center;">${producto.cantidad}</td>
          <td style="padding: 12px; text-align: right;">$${producto.precio.toLocaleString()}</td>
          <td style="padding: 12px; text-align: right;">$${producto.total.toLocaleString()}</td>
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
      <title>Solicitud de Pago - Pedido N° ${numeropedido} - Sixbridge SPA</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #007bff;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #007bff;
          margin: 0;
          font-size: 28px;
        }
        .order-info {
          background-color: #e8f4fd;
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #007bff;
        }
        .order-info h2 {
          margin: 0 0 15px 0;
          color: #007bff;
          font-size: 22px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background-color: white;
        }
        th {
          background-color: #007bff;
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: bold;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .payment-section {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 20px;
          margin: 20px 0;
          text-align: center;
        }
        .payment-button {
          display: inline-block;
          background-color: #28a745;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          font-size: 16px;
          margin: 10px 0;
        }
        .payment-button:hover {
          background-color: #218838;
        }
        .summary {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .summary h3 {
          margin: 0 0 15px 0;
          color: #495057;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .summary-row:last-child {
          border-bottom: none;
          font-weight: bold;
          font-size: 18px;
          color: #007bff;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .order-badge {
          display: inline-block;
          background-color: #007bff;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🛒 Sixbridge SPA</h1>
          <p>Solicitud de Pago - Pedido N° ${numeropedido}</p>
        </div>
        
        <div class="order-info">
          <h2>¡Tu pedido ha sido creado exitosamente!</h2>
          <p>Estimado <strong>${name}</strong>,</p>
          <p>Su pedido con número <span class="order-badge">N° ${numeropedido}</span> ha sido procesado y está listo para el pago.</p>
        </div>
        
        <h3>📋 Detalle del Pedido:</h3>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th style="text-align: center;">Cantidad</th>
              <th style="text-align: right;">Precio Unit.</th>
              <th style="text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${productosHTML}
          </tbody>
        </table>
        
        <div class="summary">
          <h3>💰 Resumen de Pago:</h3>
          <div class="summary-row">
            <span>Subtotal de Productos:</span>
            <span>$${subtotal.toLocaleString()}</span>
          </div>
          <div class="summary-row">
            <span>Costo de Envío:</span>
            <span>$${envio.toLocaleString()}</span>
          </div>
          <div class="summary-row">
            <span>Total a Pagar:</span>
            <span>$${total.toLocaleString()}</span>
          </div>
        </div>
        
        <div class="payment-section">
          <h3>💳 Realizar Pago</h3>
          <p>Para completar su compra, haga clic en el siguiente botón:</p>
          <a href="https://www.webpay.cl/company/153129?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal" class="payment-button">
            🚀 PAGAR AHORA
          </a>
          <p style="font-size: 14px; color: #666; margin-top: 10px;">
            O copie este enlace: <a href="https://www.webpay.cl/company/153129?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal">https://www.webpay.cl/company/153129</a>
          </p>
        </div>
        
        <div class="contact-info">
          <h4>📞 ¿Necesitas ayuda?</h4>
          <p><strong>WhatsApp:</strong> +56 9 4868 5501</p>
          <p><strong>Teléfono:</strong> +56 9 4868 5501</p>
          <p><strong>Email:</strong> contacto@sixbridge.cl</p>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Gracias por confiar en nuestros servicios</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático, por favor no responda a este correo.</p>
        </div>
      </div>
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
      <title>Nuevo Pedido Generado N° ${numeropedido} - Sixbridge SPA</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #17a2b8;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #17a2b8;
          margin: 0;
          font-size: 28px;
        }
        .notification-box {
          background-color: #d1ecf1;
          border: 1px solid #bee5eb;
          border-radius: 5px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #17a2b8;
        }
        .notification-box h2 {
          margin: 0 0 15px 0;
          color: #0c5460;
          font-size: 22px;
        }
        .order-details {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .order-details h3 {
          margin: 0 0 15px 0;
          color: #495057;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .detail-row:last-child {
          border-bottom: none;
          font-weight: bold;
          font-size: 18px;
          color: #17a2b8;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .order-badge {
          display: inline-block;
          background-color: #17a2b8;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .admin-notice {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📊 Sixbridge SPA</h1>
          <p>Notificación de Nuevo Pedido - Panel Administrativo</p>
        </div>
        
        <div class="notification-box">
          <h2>🆕 Nuevo Pedido Generado</h2>
          <p>Hola <strong>${name}</strong>,</p>
          <p>Se ha generado exitosamente un nuevo pedido en el sistema.</p>
        </div>
        
        <div class="order-details">
          <h3>📋 Detalles del Pedido:</h3>
          <div class="detail-row">
            <span>Número de Pedido:</span>
            <span><span class="order-badge">N° ${numeropedido}</span></span>
          </div>
          <div class="detail-row">
            <span>Cliente:</span>
            <span>${name}</span>
          </div>
          <div class="detail-row">
            <span>Monto Total:</span>
            <span>$${total ? total.toLocaleString() : 'N/A'}</span>
          </div>
          <div class="detail-row">
            <span>Fecha de Creación:</span>
            <span>${new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}</span>
          </div>
        </div>
        
        <div class="admin-notice">
          <h4>⚙️ Acciones Administrativas</h4>
          <ul>
            <li>Revisar los detalles del pedido en el panel administrativo</li>
            <li>Verificar la disponibilidad de productos</li>
            <li>Coordinar con el proveedor si es necesario</li>
            <li>Actualizar el estado del pedido según corresponda</li>
          </ul>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Sistema de Gestión de Pedidos</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático del sistema administrativo.</p>
        </div>
      </div>
    </body>
    </html>
  `,
  orderStatusUpdated: (name, numeropedido, productos, estado) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; text-align: left;">${producto.nombre}</td>
          <td style="padding: 12px; text-align: center;">${producto.cantidad}</td>
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
      <title>Pedido N° ${numeropedido} - Estado: ${estado} - Sixbridge SPA</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #6f42c1;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #6f42c1;
          margin: 0;
          font-size: 28px;
        }
        .order-notification {
          background-color: #f3e5f5;
          border: 1px solid #e1bee7;
          border-radius: 5px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #6f42c1;
        }
        .order-notification h2 {
          margin: 0 0 15px 0;
          color: #4a148c;
          font-size: 22px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background-color: white;
        }
        th {
          background-color: #6f42c1;
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: bold;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .status-badge {
          display: inline-block;
          background-color: #6f42c1;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .order-badge {
          display: inline-block;
          background-color: #6f42c1;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .action-required {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📦 Sixbridge SPA</h1>
          <p>Notificación de Pedido - Estado: ${estado}</p>
        </div>
        
        <div class="order-notification">
          <h2>🆕 ¡Nuevo Pedido Requiere Preparación!</h2>
          <p>Estimado Proveedor <strong>${name}</strong>,</p>
          <p>Se ha recibido un nuevo pedido que requiere su atención inmediata.</p>
        </div>
        
        <div class="action-required">
          <h4>⚡ Acción Requerida</h4>
          <p>Por favor, proceda con la preparación del siguiente pedido:</p>
        </div>
        
        <h3>📋 Detalle del Pedido:</h3>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Número de Pedido:</strong> <span class="order-badge">N° ${numeropedido}</span></p>
          <p><strong>Estado Actual:</strong> <span class="status-badge">${estado}</span></p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th style="text-align: center;">Cantidad Requerida</th>
            </tr>
          </thead>
          <tbody>
            ${productosHTML}
          </tbody>
        </table>
        
        <div class="contact-info">
          <h4>📞 Información de Contacto</h4>
          <p><strong>WhatsApp:</strong> +56 9 4868 5501</p>
          <p><strong>Teléfono:</strong> +56 9 4868 5501</p>
          <p><strong>Email:</strong> contacto@sixbridge.cl</p>
          <p><em>Ante cualquier duda o consulta sobre este pedido, no dude en contactarnos.</em></p>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Gracias por su colaboración y compromiso</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático, por favor no responda a este correo.</p>
        </div>
      </div>
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
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; text-align: left;">${producto.nombre}</td>
          <td style="padding: 12px; text-align: center;">${producto.cantidad}</td>
          <td style="padding: 12px; text-align: right;">$${producto.precio.toLocaleString()}</td>
          <td style="padding: 12px; text-align: right;">$${producto.total.toLocaleString()}</td>
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
      <title>Pedido con Observaciones N° ${numeropedido} - Sixbridge SPA</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #fd7e14;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #fd7e14;
          margin: 0;
          font-size: 28px;
        }
        .order-notification {
          background-color: #fff3e0;
          border: 1px solid #ffcc80;
          border-radius: 5px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #fd7e14;
        }
        .order-notification h2 {
          margin: 0 0 15px 0;
          color: #e65100;
          font-size: 22px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background-color: white;
        }
        th {
          background-color: #fd7e14;
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: bold;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .summary {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .summary h3 {
          margin: 0 0 15px 0;
          color: #495057;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .summary-row:last-child {
          border-bottom: none;
          font-weight: bold;
          font-size: 18px;
          color: #fd7e14;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .status-badge {
          display: inline-block;
          background-color: #fd7e14;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .order-badge {
          display: inline-block;
          background-color: #fd7e14;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .date-info {
          background-color: #e8f4fd;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #007bff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📋 Sixbridge SPA</h1>
          <p>Pedido con Observaciones - Requiere Atención</p>
        </div>
        
        <div class="order-notification">
          <h2>⚠️ Pedido con Observaciones</h2>
          <p>Estimado Vendedor <strong>${nombre}</strong>,</p>
          <p>Se ha recibido un pedido que requiere su revisión y atención debido a observaciones pendientes.</p>
        </div>
        
        <h3>📋 Detalle del Pedido:</h3>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Número de Pedido:</strong> <span class="order-badge">N° ${numeropedido}</span></p>
          <p><strong>Estado Actual:</strong> <span class="status-badge">${estado}</span></p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th style="text-align: center;">Cantidad</th>
              <th style="text-align: right;">Precio Unit.</th>
              <th style="text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${productosHTML}
          </tbody>
        </table>
        
        <div class="summary">
          <h3>💰 Resumen Financiero:</h3>
          <div class="summary-row">
            <span>Subtotal de Productos:</span>
            <span>$${subtotal.toLocaleString()}</span>
          </div>
          <div class="summary-row">
            <span>Costo de Envío:</span>
            <span>$${envio.toLocaleString()}</span>
          </div>
          <div class="summary-row">
            <span>Total del Pedido:</span>
            <span>$${total.toLocaleString()}</span>
          </div>
        </div>
        
        <div class="date-info">
          <h4>📅 Información de Fecha</h4>
          <p><strong>Fecha de Aprobación:</strong> ${fechaAprobacion.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}</p>
          <p><em>Por favor, revise las observaciones y tome las acciones correspondientes.</em></p>
        </div>
        
        <div class="contact-info">
          <h4>📞 Información de Contacto</h4>
          <p><strong>WhatsApp:</strong> +56 9 4868 5501</p>
          <p><strong>Teléfono:</strong> +56 9 4868 5501</p>
          <p><strong>Email:</strong> contacto@sixbridge.cl</p>
          <p><em>Para resolver las observaciones, contacte a nuestro equipo de soporte.</em></p>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Esperamos resolver las observaciones pronto</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático, por favor no responda a este correo.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  },
  orderApprovedClient: (name, numeropedido, productos) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; text-align: left;">${producto.nombre}</td>
          <td style="padding: 12px; text-align: center;">${producto.cantidad}</td>
          <td style="padding: 12px; text-align: right;">$${producto.precio ? producto.precio.toLocaleString() : 'N/A'}</td>
          <td style="padding: 12px; text-align: right;">$${producto.total ? producto.total.toLocaleString() : 'N/A'}</td>
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
      <title>Pedido Aprobado N° ${numeropedido} - Sixbridge SPA</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #007bff;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #007bff;
          margin: 0;
          font-size: 28px;
        }
        .order-number {
          background-color: #e8f4fd;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #007bff;
        }
        .order-number h2 {
          margin: 0;
          color: #007bff;
          font-size: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background-color: white;
        }
        th {
          background-color: #007bff;
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: bold;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .status-badge {
          display: inline-block;
          background-color: #28a745;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Sixbridge SPA</h1>
          <p>Notificación de Pedido Aprobado</p>
        </div>
        
        <div class="order-number">
          <h2>✅ Pedido Aprobado - N° ${numeropedido}</h2>
          <p>Estimado ${name} su pedido ha sido <span class="status-badge">APROBADO</span> y está siendo procesado.</p>
        </div>
        
        <h3>📋 Detalle del Pedido:</h3>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th style="text-align: center;">Cantidad</th>
              <th style="text-align: right;">Precio Unit.</th>
              <th style="text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${productosHTML}
          </tbody>
        </table>
        
        <div class="contact-info">
          <h4>📞 Información de Contacto</h4>
          <p><strong>WhatsApp:</strong> +56 9 4868 5501</p>
          <p><strong>Teléfono:</strong> +56 9 4868 5501</p>
          <p><strong>Email:</strong> contacto@sixbridge.cl</p>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Gracias por confiar en nuestros servicios</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático, por favor no responda a este correo.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  },
  orderApprovedProvider: (name, numeropedido, productos) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; text-align: left;">${producto.nombre}</td>
          <td style="padding: 12px; text-align: center;">${producto.cantidad}</td>
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
      <title>Pedido Aprobado N° ${numeropedido} - Preparación Requerida</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #ff6b35;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #ff6b35;
          margin: 0;
          font-size: 28px;
        }
        .order-number {
          background-color: #fff3e0;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #ff6b35;
        }
        .order-number h2 {
          margin: 0;
          color: #ff6b35;
          font-size: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background-color: white;
        }
        th {
          background-color: #ff6b35;
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: bold;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .status-badge {
          display: inline-block;
          background-color: #28a745;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .urgent-notice {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Sixbridge SPA</h1>
          <p>Notificación de Pedido Aprobado - Preparación Requerida</p>
        </div>
        
        <div class="order-number">
          <h2>🚀 Pedido Aprobado - N° ${numeropedido}</h2>
          <p>Estimado Proveedor <strong>${name}</strong>,</p>
          <p>Se ha <span class="status-badge">APROBADO</span> un nuevo pedido que requiere su preparación inmediata.</p>
        </div>
        
        <div class="urgent-notice">
          <h4>⚠️ Acción Requerida</h4>
          <p>Por favor, proceda con la preparación y envío de los siguientes productos:</p>
        </div>
        
        <h3>📋 Detalle del Pedido:</h3>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th style="text-align: center;">Cantidad Requerida</th>
            </tr>
          </thead>
          <tbody>
            ${productosHTML}
          </tbody>
        </table>
        
        <div class="contact-info">
          <h4>📞 Información de Contacto</h4>
          <p><strong>WhatsApp:</strong> +56 9 4868 5501</p>
          <p><strong>Teléfono:</strong> +56 9 4868 5501</p>
          <p><strong>Email:</strong> contacto@sixbridge.cl</p>
          <p><em>Ante cualquier duda o consulta, no dude en contactarnos.</em></p>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Gracias por su colaboración y compromiso</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático, por favor no responda a este correo.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  },
  orderStatusUpdatedObsVendor: (nombre, numeropedido, productos, total) => {
    // Crear filas de productos para la tabla
    const productosHTML = productos
      .map(
        (producto) => `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 12px; text-align: left;">${producto.nombre}</td>
          <td style="padding: 12px; text-align: center;">${producto.cantidad}</td>
          <td style="padding: 12px; text-align: right;">$${producto.precio ? producto.precio.toLocaleString() : 'N/A'}</td>
          <td style="padding: 12px; text-align: right;">$${producto.total ? producto.total.toLocaleString() : 'N/A'}</td>
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
      <title>Pedido con Observaciones N° ${numeropedido} - Sixbridge SPA</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #ffc107;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #ffc107;
          margin: 0;
          font-size: 28px;
        }
        .order-number {
          background-color: #fff8e1;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #ffc107;
        }
        .order-number h2 {
          margin: 0;
          color: #ffc107;
          font-size: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background-color: white;
        }
        th {
          background-color: #ffc107;
          color: white;
          padding: 15px;
          text-align: left;
          font-weight: bold;
        }
        td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .status-badge {
          display: inline-block;
          background-color: #ffc107;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .warning-notice {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Sixbridge SPA</h1>
          <p>Notificación de Pedido con Observaciones</p>
        </div>
        
        <div class="order-number">
          <h2>⚠️ Pedido con Observaciones - N° ${numeropedido}</h2>
          <p>Estimado Vendedor <strong>${nombre}</strong>,</p>
          <p>Su pedido tiene <span class="status-badge">OBSERVACIONES</span> que requieren su atención.</p>
        </div>
        
        <div class="warning-notice">
          <h4>📝 Observaciones Pendientes</h4>
          <p>Por favor, revise y corrija las observaciones indicadas para continuar con el procesamiento del pedido.</p>
        </div>
        
        <h3>📋 Detalle del Pedido:</h3>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th style="text-align: center;">Cantidad</th>
              <th style="text-align: right;">Precio Unit.</th>
              <th style="text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${productosHTML}
          </tbody>
        </table>
        
        <h3>💰 Resumen Financiero:</h3>
        <p><strong>Total del Pedido:</strong> $${total ? total.toLocaleString() : 'N/A'}</p>
        
        <div class="contact-info">
          <h4>📞 Información de Contacto</h4>
          <p><strong>WhatsApp:</strong> +56 9 4868 5501</p>
          <p><strong>Teléfono:</strong> +56 9 4868 5501</p>
          <p><strong>Email:</strong> contacto@sixbridge.cl</p>
          <p><em>Para resolver las observaciones, contacte a nuestro equipo de soporte.</em></p>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Esperamos resolver las observaciones pronto</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático, por favor no responda a este correo.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  },
  stockBajo: (nombreProducto, existenciaActual, umbralStockBajo, fecha) => `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alerta de Stock Bajo - ${nombreProducto}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #dc3545;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #dc3545;
          margin: 0;
          font-size: 28px;
        }
        .alert-box {
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 5px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #dc3545;
        }
        .alert-box h2 {
          color: #721c24;
          margin: 0 0 15px 0;
          font-size: 20px;
        }
        .stock-info {
          background-color: #e8f4fd;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          border-left: 4px solid #007bff;
        }
        .stock-info h3 {
          margin: 0 0 10px 0;
          color: #007bff;
        }
        .stock-details {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }
        .stock-details strong {
          color: #495057;
        }
        .urgent-badge {
          display: inline-block;
          background-color: #dc3545;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          text-align: center;
          color: #666;
        }
        .action-required {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 5px;
          padding: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 Alerta de Stock</h1>
          <p>Sixbridge SPA - Sistema de Inventario</p>
        </div>
        
        <div class="alert-box">
          <h2>⚠️ Stock Bajo Detectado</h2>
          <p>Se ha detectado que el producto <strong>${nombreProducto}</strong> tiene un stock bajo y requiere atención inmediata.</p>
        </div>
        
        <div class="stock-info">
          <h3>📊 Información del Stock</h3>
          <div class="stock-details">
            <span><strong>Producto:</strong></span>
            <span>${nombreProducto}</span>
          </div>
          <div class="stock-details">
            <span><strong>Existencia Actual:</strong></span>
            <span style="color: #dc3545; font-weight: bold;">${existenciaActual} unidades</span>
          </div>
          <div class="stock-details">
            <span><strong>Umbral de Alerta:</strong></span>
            <span>${umbralStockBajo} unidades</span>
          </div>
          <div class="stock-details">
            <span><strong>Fecha de Alerta:</strong></span>
            <span>${fecha}</span>
          </div>
        </div>
        
        <div class="action-required">
          <h4>🔧 Acción Requerida</h4>
          <ul>
            <li>Verificar la disponibilidad del producto con el proveedor</li>
            <li>Realizar pedido de reposición si es necesario</li>
            <li>Actualizar el stock en el sistema</li>
            <li>Considerar ajustar precios si hay escasez</li>
          </ul>
        </div>
        
        <div class="footer">
          <p><strong>Sixbridge SPA</strong></p>
          <p>Sistema Automático de Alertas de Inventario</p>
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático generado por el sistema.</p>
        </div>
      </div>
    </body>
    </html>
  `,
};
