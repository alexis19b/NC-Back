const express = require("express");
const dotenv = require("dotenv");
const dbConection = require("./database/config");
const cors = require("cors");
const useMember = require("./routes/Member");
const useTeam = require("./routes/Team");
const useUser = require("./routes/User");

//Inicio de servidor de expresss
const app = express();
//Manejo de Variables de entorno
dotenv.config();
//lectura y parseo del body
app.use(express.json());
//Conexion a la base de datos
dbConection();
//Cors
app.use(cors());
app.use(express.static("public"));
app.use("/api/members", useMember);
app.use("/api/teams", useTeam);
app.use("/api/users", useUser);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
