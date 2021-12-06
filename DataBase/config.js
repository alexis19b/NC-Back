const mongoose = require("mongoose");
require("dotenv").config();

//conexion a la base de datos
const dbConection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("BD Conexion exitosa");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar BD");
  }
};

module.exports = dbConection;
