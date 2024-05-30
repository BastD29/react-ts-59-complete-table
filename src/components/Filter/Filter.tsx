import Button from "../Button/Button";
import style from "./Filter.module.scss";

const Filter: React.FC = () => {
  return (
    <div className={style["filter"]}>
      <div className={style["filter__group"]}>
        <h3>Cycle</h3>
        <div className={style["filter__btn-group"]}>
          <Button>Annual</Button>
          <Button>Perennial</Button>
        </div>
      </div>

      <div className={style["filter__group"]}>
        <h3>Sunlight</h3>
        <div className={style["filter__btn-group"]}>
          <Button>Full sun</Button>
          <Button>Part sun</Button>
          <Button>Part shade</Button>
        </div>
      </div>

      <div className={style["filter__group"]}>
        <h3>Watering</h3>
        <div className={style["filter__btn-group"]}>
          <Button>Frequent</Button>
          <Button>Average</Button>
          <Button>Minimum</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
