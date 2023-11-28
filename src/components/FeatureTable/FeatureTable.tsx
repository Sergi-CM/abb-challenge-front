import { FeatureStructure } from "../../types/types";
import { getHeaderBackgroundColor, getIconAndStatus } from "./utils";
import styles from "./FeatureTable.module.scss";

interface FeatureTableProps extends FeatureStructure {}

const FeatureTable = ({
  featureName,
  measurements,
}: FeatureTableProps): JSX.Element => {
  return (
    <section className={styles["feature-table"]}>
      <div
        className={`${
          styles[getHeaderBackgroundColor(measurements).toString()]
        } ${styles["feature-table__header"]}`}
      >
        <h2>{featureName}</h2>
      </div>
      <table className={styles["measurements-table"]}>
        <thead>
          <tr>
            <th>Control</th>
            <th>Dev</th>
            <th>DevOutTol</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {measurements.map((measurement, measurementIndex) => (
            <tr key={measurementIndex}>
              <td>{measurement.control}</td>
              <td>{measurement.deviation}</td>
              <td>{measurement.devOutTol}</td>
              <td className={styles.icon}>
                {
                  getIconAndStatus(measurement.deviation, measurement.devOutTol)
                    .icon
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FeatureTable;
