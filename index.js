const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");
const { json2csv } = require("json-2-csv");
const cors = require("cors");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");
const conectarDB = require("./config/db");
const jwt = require("jsonwebtoken");
const Pedido = require("./models/Pedido");
const Usuario = require("./models/Usuario");
const Producto = require("./models/Producto");

// Configuración de orígenes permitidos
const FRONTEND_ORIGINS = [
  process.env.FRONTEND_ORIGIN || "http://localhost:3000",
  "https://localhost:3000",
  "http://127.0.0.1:3000",
  "https://127.0.0.1:3000",
];

// Conectar a la Base de datos
conectarDB();

// Initialize Express app
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

// Configuración CORS mejorada
const corsOptions = {
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (como aplicaciones móviles o curl)
    if (!origin) return callback(null, true);

    if (
      FRONTEND_ORIGINS.includes(origin) ||
      origin.includes("vercel.app") ||
      origin.includes("localhost")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  methods: ["GET", "POST", "OPTIONS"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Habilitar CORS para todas las rutas
app.use(cors(corsOptions));

// Middleware para manejar OPTIONS (preflight)
app.options("*", cors(corsOptions));

// Middleware to authenticate and authorize users
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const usuario = jwt.verify(token, process.env.SECRETA);
    req.user = usuario;

    if (req.user.role !== "administrador") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Initialize Apollo Server with improved configuration
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
  playground: process.env.NODE_ENV !== "production",
  persistedQueries: false,
  cache: "bounded",
  context: ({ req, res }) => {
    const token = req.headers["authorization"] || "";

    if (token) {
      try {
        const usuario = jwt.verify(
          token.replace("Bearer ", ""),
          process.env.SECRETA
        );

        return {
          usuario: {
            id: usuario.id,
            role: usuario.role,
            token: usuario.token,
          },
          Pedido,
          Usuario,
          res, // Pasamos el objeto response al contexto
        };
      } catch (error) {
        console.log("Error en el token:", error);
        // No lanzamos error para permitir operaciones no autenticadas
      }
    }

    return { Pedido, Usuario, res };
  },
  formatError: (error) => {
    console.error("GraphQL Error:", error);
    return {
      message: error.message,
      locations: error.locations,
      path: error.path,
      extensions: {
        code: error.extensions?.code || "INTERNAL_SERVER_ERROR",
      },
    };
  },
});

// Async function to start the server
async function startServer() {
  await server.start();

  // Apply Apollo middleware with CORS disabled (we handle it at Express level)
  server.applyMiddleware({
    app,
    cors: false,
    path: "/graphql",
    bodyParserConfig: {
      limit: "10mb",
    },
  });

  const HOST = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
  const graphqlPath = server.graphqlPath;

  app.listen(PORT, () => {
    console.log(`\nServidor Express listo en ${HOST}`);
    console.log(`Servidor GraphQL listo en ${HOST}${graphqlPath}`);
    console.log(
      `Explorador GraphQL disponible en ${HOST}${graphqlPath}/playground`
    );

    // Mostrar configuración CORS
    console.log("\nConfiguración CORS:");
    console.log(`Orígenes permitidos: ${FRONTEND_ORIGINS.join(", ")}`);
  });
}

// Start the server with error handling
startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
