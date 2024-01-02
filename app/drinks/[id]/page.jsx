import Image from "next/image";
import Link from "next/link";
import drinkImg from "./drink.jpg";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  // throw error

  if (!res.ok) {
    throw new Error("Failed to fetch drink");
  }
  const data = await res.json();
  return data;
};
const SingleDrinkPage = async ({ params }) => {
  const data = await fetchDrink(params.id);
  console.log(data.drinks[0].strDrinkThumb);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12 uppercase">
        back to drinks
      </Link>
      {/* <Image src={drinkImg} className="w-48 h-48 rounded-lg" alt="drink" /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
