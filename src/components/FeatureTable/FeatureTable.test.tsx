import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import FeatureTable from "./FeatureTable";

const sampleData = {
  featureName: "Seam",
  measurements: [
    {
      control: "Length",
      expected: 10.5,
      deviation: 0.2,
      devOutTol: 0.5,
    },
  ],
};

const tableHeaders = ["Control", "Dev", "DevOutTol"];

describe("Given a FeatureTable component", () => {
  describe("When it's rendered receiving a feature data", () => {
    render(
      <FeatureTable
        featureName={sampleData.featureName}
        measurements={sampleData.measurements}
      />
    );

    test("Then it should show the table headers", () => {
      tableHeaders.forEach((header) => {
        expect(screen.getByText(header)).toBeInTheDocument();
      });
    });

    test("Then it should show the feature data correctly in the table", () => {
      const { getByText } = render(<FeatureTable {...sampleData} />);
      const { control, deviation, devOutTol } = sampleData.measurements[0];

      expect(
        getByText(control)?.closest("tr")?.querySelector("td:nth-child(1)")
      ).toHaveTextContent(control);

      expect(
        getByText(deviation.toString())
          ?.closest("tr")
          ?.querySelector("td:nth-child(2)")
      ).toHaveTextContent(deviation.toString());

      expect(
        getByText(devOutTol.toString())
          ?.closest("tr")
          ?.querySelector("td:nth-child(3)")
      ).toHaveTextContent(devOutTol.toString());
    });
  });
});
