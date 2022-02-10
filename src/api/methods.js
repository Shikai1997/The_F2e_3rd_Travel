import { get } from "@/api/index";

export const getScenicSpot = () => {
  return get("/MOTC/v2/Tourism/ScenicSpot?$top=32&$format=JSON");
};
export const getRestaurant = () => {
  return get("/MOTC/v2/Tourism/Restaurant?$top=32&$format=JSON");
};
export const getHotel = () => {
  return get("/MOTC/v2/Tourism/Hotel?$top=32&$format=JSON");
};
export const getActivity = () => {
  return get("/MOTC/v2/Tourism/Activity?$top=32&$format=JSON");
};