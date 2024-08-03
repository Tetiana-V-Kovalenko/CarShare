const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c779c751f9msh12d20969b0fd0c0p181da3jsnfc6844c6d9d6",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export const getCars = async (query?: string) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
