import { PartDashboardStructure } from "../../types/types";
import FeatureTable from "../FeatureTable/FeatureTable";
import styles from "./PartDashboard.module.scss";

interface PartDashboardProps {
  data: PartDashboardStructure;
}

const PartDashboard = ({ data }: PartDashboardProps) => {
  return (
    <section>
      {data.map((part, partIndex) => (
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
      ))}
    </section>
  );
};

export default PartDashboard;
