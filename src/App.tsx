import styles from "./App.module.scss";
import PartDashboard from "./components/PartDashboard/PartDashboard";

const App = () => {
  return (
    <main className={styles.main}>
      <PartDashboard />
    </main>
  );
};

export default App;
