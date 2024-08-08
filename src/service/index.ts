const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c779c751f9msh12d20969b0fd0c0p181da3jsnfc6844c6d9d6",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export type FilterProps = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};
export const getCars = async (
  filters: FilterProps = {
    manufacturer: "string",
    year: 2022,
    fuel: "",
    limit: 10,
    model: "",
  }
) => {
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters?.manufacturer}&year=${filters?.year}&model=${filters?.model}&limit=${filters.limit}&fuel_type=${filters.fuel}`,
    {
      headers: options.headers,
    }
  );
  const result = await response.json();

  return result;
};
