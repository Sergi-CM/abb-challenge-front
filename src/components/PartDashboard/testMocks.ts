import { PartDashboardStructure } from "../../types/types";

export const sampleData: PartDashboardStructure = [
  {
    name: "Wheel",
    features: [
      {
        featureName: "Seam",
        measurements: [
          {
            control: "Length",
            expected: 10.5,
            deviation: 0.2,
            devOutTol: 0.5,
          },
        ],
      },
    ],
  },
  {
    name: "Brake Caliper",
    features: [
      {
        featureName: "Piston",
        measurements: [
          {
            control: "Diameter",
            expected: 2.5,
            deviation: 0.1,
            devOutTol: 0.3,
          },
        ],
      },
    ],
  },
];
