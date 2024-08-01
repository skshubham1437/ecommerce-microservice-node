const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Products Service is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Products Service is running on port ${PORT}`);
});
