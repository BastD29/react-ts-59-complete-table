import Table from "../Table/Table";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style["app"]}>
      {/* <h2>App</h2> */}
      <Table />
    </div>
  );
};

export default App;
