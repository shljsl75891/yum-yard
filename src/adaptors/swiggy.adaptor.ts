import { AnyObject, IRestaurantData } from "../types";
import { IAdapter } from "./types";

export class SwiggyAdapter implements IAdapter<Array<IRestaurantData>> {
  private static instance: SwiggyAdapter;
  private constructor() {}

  public static getInstance(): SwiggyAdapter {
    if (!this.instance) {
      this.instance = new SwiggyAdapter();
    }
    return this.instance;
  }

  adaptTo(res: AnyObject): Array<IRestaurantData> {
    return res?.map(({ info }: { info: AnyObject }) => {
      return {
        isOpen: info?.isOpen,
        imgId: info?.cloudinaryImageId,
        distance: info?.sla?.lastMileTravel,
        estimatedDelieveryTime: info?.sla?.deliveryTime,
        address: info?.locality,
        name: info?.name,
        rating: info?.avgRating,
        discount: `${info?.aggregatedDiscountInfoV3?.header} ${info?.aggregatedDiscountInfoV3?.subHeader}`,
        cuisines: info?.cuisines,
      };
    });
  }
}
