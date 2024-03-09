// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;

export interface IRestaurantData {
  isOpen: boolean;
  imgId: string;
  distance: number;
  estimatedDelieveryTime: string;
  name: string;
  rating: string;
  discount: string;
  cuisines: Array<string>;
  address: string;
}
