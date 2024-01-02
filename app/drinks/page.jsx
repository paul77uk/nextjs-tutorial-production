import DrinksList from "@/components/DrinksList.jsx";
import { Image } from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url);
  // throw error

  if (!res.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <h1 className="text-7xl">Drinks Page</h1>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
