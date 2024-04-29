import { data } from "../../data/data";
import DynamicComponent from "../components";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style["app"]}>
      {/* <h1>App</h1> */}
      {data.content.body.map((block) => DynamicComponent(block))}
    </div>
  );
}
