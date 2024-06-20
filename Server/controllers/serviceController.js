const Service = require('../models/service');



const getServices = async (req, res) => {
    
    try {
      const services = await Service.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const addService = async (req, res) => {
    console.log(req.body);
    try {
     
      const { name, review } = req.body;
      const newService = new Service({ name, review });
      console.log("newservices:",newService);
     
      await newService.save();
      

      res.status(201).json(newService);
    } catch (error) {
      console.error('Error saving service:', error.message);
      res.status(400).json({ message: error.message });
    }
  };
  


  module.exports=({
    getServices,
    addService
  })   
