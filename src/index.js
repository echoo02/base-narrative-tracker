const { getTrendingCoins } =
  require("./fetch");

const { rankProjects } =
  require("./rank");

async function main() {
  const projects =
    await getTrendingCoins();

  const ranking =
    rankProjects(projects);

  console.table(ranking);
}

main();
