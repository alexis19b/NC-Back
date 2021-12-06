const router = require("express").Router();
const { check } = require("express-validator");
const {
  getAllUser,
  postUser,
  putUser,
} = require("../Controllers/UsersControllers");
const { validateFields } = require("../Middleware/ValidateFields");

router.get("/", getAllUser);

router.post(
  "/",
  [
    check("fullName", "El nombre es obligatorio").not().isEmpty(),
    check("fullName", "El nombre debe ser válido").isString(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email debe ser válido").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),

    validateFields,
  ],
  postUser
);

router.put(
  "/:id",
  [
    check("fullName", "El nombre es obligatorio").not().isEmpty(),
    check("fullName", "El nombre debe ser válido").isString(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email debe ser válido").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),

    validateFields,
  ],
  putUser
);
module.exports = router;
