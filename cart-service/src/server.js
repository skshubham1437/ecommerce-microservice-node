const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Cart Service is running on port ${PORT}`);
});
