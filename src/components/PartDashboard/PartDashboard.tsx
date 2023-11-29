import { useEffect, useState } from "react";
import FeatureTable from "../FeatureTable/FeatureTable";
import styles from "./PartDashboard.module.scss";
import { PartStructure } from "../../types/types";

const PartDashboard = () => {
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
  return (
    <section className={styles["part-wrapper"]}>
      {data ? (
        data.map((part, partIndex) => (
          <div key={partIndex}>
            <h1>{part.name}</h1>
            <div className={styles["tables-wrapper"]}>
              {part.features.map((feature, featureIndex) => (
                <FeatureTable
                  featureName={feature.featureName}
                  measurements={feature.measurements}
                  key={featureIndex}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default PartDashboard;
