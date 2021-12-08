const router = require("express").Router();
const { check } = require("express-validator");
const { validateFields } = require("../middleware/ValidateFields");
const {
  getAllMember,
  postMember,
  putMember,
} = require("../controllers/MemberControllers");

router.get("/", getAllMember);

router.post(
  "/",
  [
    check("fullname", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("country", "El pais es obligatorio").not().isEmpty().isString(),
    check("areas", "El area es obligatoria").not().isEmpty(),
    check("github", "El usuario de git es obligatorio").not().isEmpty(),
    check("availability", "La disponibilidad es obligatoria").not().isEmpty(),
    check("stack", "La tecnologia es obligoria").not().isEmpty(),
    check("language", "El leguaje es obligorio").not().isEmpty(),
    validateFields,
  ],
  postMember
);

router.put(
  "/:id",
  [
    check("fullname", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("country", "El pais es obligatorio").not().isEmpty().isString(),
    check("areas", "El area es obligatoria").not().isEmpty(),
    check("github", "El usuario de git es obligatorio").not().isEmpty(),
    check("availability", "La disponibilidad es obligatoria").not().isEmpty(),
    check("stack", "La tecnologia es obligoria").not().isEmpty(),
    check("language", "El leguaje es obligorio").not().isEmpty(),
    validateFields,
  ],
  putMember
);
//comentario
module.exports = router;
