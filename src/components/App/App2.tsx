import Header from "../Header/Header3";
import Table from "../Table/Table2";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style["app"]}>
      <Header />
      <Table />
    </div>
  );
};

export default App;
