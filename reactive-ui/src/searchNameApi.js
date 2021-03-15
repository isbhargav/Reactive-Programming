import pokemonNames from "./en.json";

export async function searchName(patt) {
  const pat = new RegExp(patt, "i");
  const result = pokemonNames.filter((pokemon) => pokemon.match(pat));
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), 200);
  });
}