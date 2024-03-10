import { useEffect, useState } from "react";
import Header from "../components/Header";
import { IRestaurantData } from "../types";
import RestaurantCard from "../components/RestaurantCard";
import { SwiggyService } from "../services/api/swiggy.service";
import { SwiggyAdapter } from "../adaptors/swiggy.adaptor";

const HomePage: React.FC = () => {
  const [restaurantData, setRestaurantData] = useState<IRestaurantData[]>([]);

  const fetchRestaurants = async () => {
    const swiggyService = SwiggyService.getInstance();
    const swiggyAdapter = SwiggyAdapter.getInstance();
    const data = swiggyAdapter.adaptTo(await swiggyService.fetchData());
    setRestaurantData(data);
  };

  useEffect(() => {
    fetchRestaurants();
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <div className="m-4 p-4 flex gap-5 flex-wrap">
        {restaurantData?.map((data) => {
          return <RestaurantCard key={data?.imgId} data={data} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
