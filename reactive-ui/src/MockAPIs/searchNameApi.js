import pokemonNames from "./en.json";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function searchName(patt) {
  const pat = new RegExp(patt, "i");
  const result = pokemonNames.filter((pokemon) => pokemon.match(pat));
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), getRandomInt(100, 1000));
  });
}
