const express = require("express");
const dotenv = require("dotenv");
const dbConection  = require("./database/config");
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
app.use("/api/members", useMember);
app.use("/api/teams", useTeam);
app.use("/api/users", useUser);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto", PORT);
});
