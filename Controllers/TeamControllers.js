const Team = require("../Models/Team");

async function getAllTeam(req, res) {
  const getAllTeams = await Team.find();
  res.json({ ok: true, getAllTeams });
}

async function postTeam(req, res) {
  const { name, number, teamleader, stack, project, members, cohort } =
    req.body;
  try {
    const newTeam = await Team.create({
      name,
      number,
      project,
      stack,
      members,
      teamleader,
      cohort,
    });
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Comuniquese con el administrador",
    });
  }
}

async function putTeam(req, res) {
  const teamId = req.params.id;

  const team = await Team.findById(teamId);

  const newTeam = {
    ...req.body,
  };
  const teamUpdate = await Team.findByIdAndUpdate(teamId, newTeam, {
    new: true,
  });

  res.json({
    ok: true,
    team: teamUpdate,
  });
}

async function putMemberTeam(req, res) {
  const teamId = req.params.id;
  const { members } = req.body;

  const teamMemberUpdate = await Team.findByIdAndUpdate(
    teamId,
    {
      $addToSet: { members: members },
    },
    { new: true }
  );

  res.json({ ok: true, team: teamMemberUpdate });
}

module.exports = {
  getAllTeam,
  postTeam,
  putTeam,
  putMemberTeam,
};
