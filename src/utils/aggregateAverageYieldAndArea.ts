import { DataItem } from "../types/DataItem";

type Result = Record<
  string,
  {
    totalYield: number;
    totalArea: number;
    count: number;
  }
>;

export const aggregateAverageYieldAndArea = (data: DataItem[]) => {
  const result = {} as Result;

  data.forEach((item) => {
    const crop = item["Crop Name"];
    const yieldVal = parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
    const area = parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"]);

    if (!result[crop]) {
      result[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    result[crop].totalYield += yieldVal;
    result[crop].totalArea += area;
    result[crop].count += 1;
  });

  return Object.keys(result).map((crop) => ({
    crop,
    avgYield: (result[crop].totalYield / result[crop].count).toFixed(3),
    avgArea: (result[crop].totalArea / result[crop].count).toFixed(3),
  }));
};
