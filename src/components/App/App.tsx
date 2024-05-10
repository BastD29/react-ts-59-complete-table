import Header from "../Header/Header2";
import Table from "../Table/Table";
import useSearch from "../../hooks/useSearch";
import style from "./App.module.scss";

const App: React.FC = () => {
  const { searchedData, searchTerm, setSearchTerm } = useSearch(300);

  return (
    <div className={style["app"]}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table searchedData={searchedData} />
    </div>
  );
};

export default App;
