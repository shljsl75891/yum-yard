export class SwiggyService {
  private static instance: SwiggyService;
  private apiUrl: string;

  private constructor() {
    this.apiUrl = import.meta.env.VITE_SWIGGY_DATA_URL;
  }

  public static getInstance(): SwiggyService {
    if (!this.instance) {
      this.instance = new SwiggyService();
    }
    return this.instance;
  }

  async fetchData() {
    const response = await fetch(
      "https://corsproxy.org/?" + encodeURIComponent(this.apiUrl),
    );
    const data = await response.json();
    const restaurantData =
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    return restaurantData;
  }
}
