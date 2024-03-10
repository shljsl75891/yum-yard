import { swiggyImgUrl } from "../config";
import { IRestaurantData } from "../types";

interface RestaurantCardProps {
  data: IRestaurantData;
}

const RestaurantCard: React.FC<RestaurantCardProps> = (props) => {
  const { data } = props;
  const {
    name,
    imgId,
    rating,
    address,
    cuisines,
    discount,
    distance,
    estimatedDelieveryTime,
  } = data;

  return (
    <div className="w-60 p-5 relative text-xl cursor-pointer hover:shadow-xl bg-gray-100 shadow-md rounded-lg">
      {!discount.includes("undefined") && (
        <p className="py-1 px-2 rounded-md shadow-xl absolute text-xs bg-red-600 border-2 left-2 top-6 border-yellow-500  text-white font-bold">
          🏷️{discount}
        </p>
      )}
      <img
        src={swiggyImgUrl + imgId}
        alt={name + "-card-img"}
        className="h-40 w-full"
      />
      <div className="flex gap-2 items-center">
        <h3 className="m-1 font-bold">{name}</h3>
        <p className="text-sm">⭐ {rating}</p>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-sm font-medium">{estimatedDelieveryTime + "mins"}</p>
        <p className="text-sm">{`(${distance} km)`}</p>
      </div>
      <p className="text-sm text-gray-800 font-medium">{cuisines.join(", ")}</p>
      {address && (
        <p className="text-sm text-orange-600 font-bold">Near {address}</p>
      )}
    </div>
  );
};

export default RestaurantCard;
