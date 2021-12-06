const router = require("express").Router();
const { check } = require("express-validator");
const { validateFields } = require("../Middleware/ValidateFields");
const {
  getAllTeam,
  postTeam,
  putTeam,
  putMemberTeam,
} = require("../Controllers/TeamControllers");

router.get("/", getAllTeam);

router.post(
  "/",
  [
    check(
      "stack",
      "La tecnologia debe ser de tipo cadena de caracteres"
    ).isString(),

    validateFields,
  ],
  postTeam
);

router.put(
  "/:id",
  [
    check(
      "stack",
      "La tecnologia debe ser de tipo cadena de caracteres"
    ).isString(),

    validateFields,
  ],
  putTeam
);
router.put(
  "/asignar/:id",
  [
    check(
      "members",
      "La tecnologia debe ser de tipo cadena de caracteres"
    ).isArray(),

    validateFields,
  ],
  putMemberTeam
);

module.exports = router;
