import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

// Swagger configuration options
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with TypeScript",
      version: "1.0.0",
      description:
        "This is a simple API documentation using Swagger and TypeScript",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
      {
        url: "https://stockinc-backend.onrender.com",
        description: "Production server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API docs (use your route files)
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger Docs available at http://localhost:5000/docs");
};
