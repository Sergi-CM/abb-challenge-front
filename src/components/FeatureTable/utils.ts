import { MeasurementsStructure } from "../../types/types";

export const getIconAndStatus = (dev: number, devOutTol: number) => {
  if (dev <= devOutTol) {
    return { icon: "✅", status: "green" };
  } else if (dev <= 1.3 * devOutTol && dev >= 0.7 * devOutTol) {
    return { icon: "⚠️", status: "orange" };
  } else {
    return { icon: "❌", status: "red" };
  }
};

export const getHeaderBackgroundColor = (
  featureData: MeasurementsStructure
) => {
  const statuses = featureData.map(
    (item) => getIconAndStatus(item.deviation, item.devOutTol).status
  );

  if (statuses.includes("red")) {
    return "red";
  } else if (statuses.includes("orange")) {
    return "orange";
  } else {
    return "green";
  }
};
