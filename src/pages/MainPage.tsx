import { useEffect, useState } from "react";
import Hero from "../components/Hero/İndex";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [params] = useSearchParams();

  useEffect(() => {
    //  urldeki bütün parameterlerden bir obje oluşturma
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj)
      .then((data: CarType[]) => setCars(data))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div>
      <Hero />
      <div id="catalogue">
        {/* başlık */}
        <div className="home__text-container">
          <h1>Araba kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        <div className="home__filters"></div>

        {/* listeleme alanı */}
        {cars.length === 0 ? (
          <div>
            <h2>HATA</h2>
          </div>
        ) : (
          <section></section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
