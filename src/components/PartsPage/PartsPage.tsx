import { useEffect, useState } from "react";
import { PartStructure } from "../../types/types";
import PartDashboard from "../PartDashboard/PartDashboard";

const PartsPage = (): JSX.Element => {
  const [data, setData] = useState<PartStructure[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/parts", {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        });

        const { parts } = await response.json();

        setData(parts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? <PartDashboard data={data} /> : <p>Loading...</p>}</div>;
};

export default PartsPage;
