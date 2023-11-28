import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PartDashboard from "./PartDashboard";
import { sampleData } from "./testMocks";

describe("Given a PartDashboard component", () => {
  describe("When it's rendered receiving the data of 2 parts", () => {
    test("Then it should show the names of the parts inside an h1 heading", () => {
      render(<PartDashboard data={sampleData} />);

      const wheelHeading = screen.getByRole("heading", {
        name: "Wheel",
        level: 1,
      });
      const brakeCaliperHeading = screen.getByRole("heading", {
        name: "Brake Caliper",
        level: 1,
      });

      const totalPartsHeadings = screen.getAllByRole("heading", { level: 1 });

      expect(wheelHeading).toBeInTheDocument();
      expect(brakeCaliperHeading).toBeInTheDocument();
      expect(totalPartsHeadings).toHaveLength(2);
    });

    test("Then it should show as many tables as features receives", () => {
      const expectedNumberOfTables = 2;

      render(<PartDashboard data={sampleData} />);
      const totalFeatureTables = screen.getAllByRole("heading", { level: 2 });

      expect(totalFeatureTables).toHaveLength(expectedNumberOfTables);
    });
  });
});
