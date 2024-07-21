import { DataItem } from "../types/DataItem";

type Result = Record<
  string,
  {
    max: {
      crop: string;
      production: number;
    };
    min: {
      crop: string;
      production: number;
    };
  }
>;

export const aggregateMaxMinProduction = (data: DataItem[]) => {
  const result = {} as Result;

  data.forEach((item) => {
    const year = item.Year;
    const production = parseFloat(item["Crop Production (UOM:t(Tonnes))"]);

    if (!result[year]) {
      result[year] = {
        max: { crop: item["Crop Name"], production },
        min: { crop: item["Crop Name"], production },
      };
    } else {
      if (production > result[year].max.production) {
        result[year].max = { crop: item["Crop Name"], production };
      }
      if (production < result[year].min.production) {
        result[year].min = { crop: item["Crop Name"], production };
      }
    }
  });

  return Object.keys(result).map((year) => ({
    year,
    maxCrop: result[year].max.crop,
    minCrop: result[year].min.crop,
  }));
};
