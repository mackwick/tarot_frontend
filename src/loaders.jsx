//BASE URL
const URL = import.meta.env.VITE_BASE_URL;

//INDEX LOADER
export const indexLoader = async () => {
  const response = await fetch(`${URL}`);
  const allCards = await response.json;
  return allCards;
};

//SHOW LOADER
export const showLoader = async ({ params }) => {
  const response = await fetch(`${URL}${params.id}/`);
  const aCard = await response.json;
  return aCard;
};
