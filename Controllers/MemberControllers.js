const Member = require("../Models/Member");

async function getAllMember(req, res) {
  const getAllMembers = await Member.find();
  res.json({ ok: true, getAllMembers });
}

async function postMember(req, res) {
  const {
    cohort,
    fullname,
    email,
    country,
    areas,
    github,
    teamleader,
    availability,
    stack,
    phone,
    team,
    language,
    linkedin,
    others,
    experience
  } = req.body;

  try {
    const newMemebers = await Member.create({
      cohort,
      fullname,
      email,
      country,
      areas,
      github,
      linkedin,
      teamleader,
      others,
      availability,
      stack,
      language,
      phone,
      team,
      experience
    });
    res.status(201).json(newMemebers);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Comuniquese con el administrador",
    });
  }
}

async function putMember(req, res) {
  const memberId = req.params.id;

  try {
    const member = await Member.findById(memberId);

    if (!member) {
      return res.status(404).json({
        ok: false,
        msg: "Miembro no existe por el id",
      });
    }

    const newmeber = {
      ...req.body,
    };

    const memberUpdate = await Member.findByIdAndUpdate(memberId, newmeber, {
      new: true,
    });

    res.json({
      ok: true,
      member: memberUpdate,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Comuniquese con el administrador",
    });
  }
}

module.exports = {
  getAllMember,
  postMember,
  putMember,
};
