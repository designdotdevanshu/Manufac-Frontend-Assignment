import data from "../data/Manufac_IndiaAgroDataset.json";
import { DataItem } from "../types/DataItem";

export const loadData = () => {
  return data.map((item) => ({
    ...item,
    "Crop Production (UOM:t(Tonnes))": item["Crop Production (UOM:t(Tonnes))"] || 0,
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0,
    "Area Under Cultivation (UOM:Ha(Hectares))": item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0,
  })) as DataItem[];
};
