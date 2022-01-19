import { get } from "@/api/index";

export const getScenicSpot = () => {
  return get("/MOTC/v2/Tourism/ScenicSpot?$top=32&$format=JSON");
};
