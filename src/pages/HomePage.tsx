import { ChangeEvent, useEffect, useState } from "react";
import { SwiggyAdapter } from "../adaptors/swiggy.adaptor";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import Button from "../components/ui/Button";
import ShimmerUI from "../components/ui/ShimmerCardUI";
import TextInput from "../components/ui/TextInput";
import { SwiggyService } from "../services/api/swiggy.service";
import { IRestaurantData } from "../types";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [restaurantData, setRestaurantData] = useState<IRestaurantData[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    IRestaurantData[]
  >([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const searchFilteredRestaurants = restaurantData.filter((res) => {
        if (res.name.toLowerCase().includes(searchInput)) {
          return true;
        } else if (
          res.cuisines.find((item) => item.toLowerCase().includes(searchInput))
        ) {
          return true;
        }
      });
      setFilteredRestaurants(searchFilteredRestaurants);
    }, 450);
    return () => {
      clearTimeout(timer);
    };
  }, [restaurantData, searchInput]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const swiggyService = SwiggyService.getInstance();
    const swiggyAdapter = SwiggyAdapter.getInstance();
    const data = swiggyAdapter.adaptTo(await swiggyService.fetchData());
    setRestaurantData(data);
    setFilteredRestaurants(data);
    setIsLoading(false);
  };

  const handleTopRated = () => {
    const allRestaurants = [...restaurantData];
    const topRatedRestaurants = allRestaurants
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    setFilteredRestaurants(topRatedRestaurants);
    setIsFilterApplied(true);
  };

  const handleResetFilter = () => {
    setFilteredRestaurants(restaurantData);
    setIsFilterApplied(false);
  };

  const handleSearchFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setFilteredRestaurants(restaurantData);
    }
    setSearchInput(event.target.value.toLowerCase());
  };

  return (
    <>
      <Header />
      <div className="p-2 bg-yellow-100 flex justify-between items-center">
        <div className="w-1/4 flex gap-2 items-center">
          <TextInput
            disabled={isLoading}
            className="w-full border-transparent border focus:border focus:border-gray-400 focus:text-gray-600"
            placeholder="Search any cuisine or restaurant..."
            value={searchInput}
            onChange={handleSearchFieldChange}
          />
        </div>
        <div className="flex gap-2">
          <Button
            disabled={isLoading || !isFilterApplied}
            onClick={handleResetFilter}
            className="bg-orange-200 hover:bg-orange-300"
          >
            Reset
          </Button>
          <Button
            disabled={isLoading || isFilterApplied}
            onClick={handleTopRated}
            className="bg-orange-200 hover:bg-orange-300"
          >
            Top Rated
          </Button>
        </div>
      </div>
      <div className="m-4 p-4 flex gap-5 flex-wrap">
        {isLoading ? (
          <ShimmerUI length={21} />
        ) : (
          filteredRestaurants?.map((data) => (
            <RestaurantCard key={data?.imgId} data={data} />
          ))
        )}
      </div>
    </>
  );
};

export default HomePage;
