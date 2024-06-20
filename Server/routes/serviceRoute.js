const express = require('express');
const serviceController=require('../controllers/serviceController.js');




const serviceRouter = express.Router();

serviceRouter.get('/getServices', serviceController.getServices);
serviceRouter.post('/addServices', serviceController.addService);


module.exports = serviceRouter;