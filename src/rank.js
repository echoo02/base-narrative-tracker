function rankProjects(projects) {
  return projects
    .map((p, index) => ({
      rank: index + 1,
      name: p.item.name
    }));
}

module.exports = {
  rankProjects
};