function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MOVIES = [
  {
    movieId: 1,
    status: true,
    src:
      "https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg",
  },
  {
    movieId: 2,
    status: true,
    src:
      "https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg",
  },
];
export async function dbUpdate({ movieId, status }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ movieId, status }), getRandomInt(100, 1000));
  });
}

export async function dbSelect() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOVIES), getRandomInt(100, 1000));
  });
}
