const express = require('express');
const app = express();
const body = require('body-parser');
const db = require("./config/db");
const swaggerUi = require("swagger-ui-express");

swaggerDocument = require("./src/swagger/swagger.json");
const dealFilterBrandsController = require("./src/controllers/dealFilterBrands");
const dealFilterDevicesController = require("./src/controllers/dealFilterModels") 
const port = process.env.PORT || 8080;

app.use(body.json());
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  next();
});

app.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/productSpecification/',dealFilterDevicesController.getModels)
app.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/category/brandNames',dealFilterBrandsController.getBrands)
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port);
module.exports = app;