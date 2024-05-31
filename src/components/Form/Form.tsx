import { ChangeEvent, FormEvent, useState } from "react";
import { useRowsContext } from "../../hooks/contexts/useRowsContext";
import { useModalContext } from "../../hooks/contexts/useModalContext";
import { PlantType } from "../../models/plant";
import { ADD_ROW, UNSET_MODAL } from "../../constants/actions";
import style from "./Form.module.scss";

const Form: React.FC = () => {
  const { dispatch: rowDispatch, state: rows } = useRowsContext();
  const { dispatch: modalDispatch } = useModalContext();

  const initialFormValues: Omit<PlantType, "id"> = {
    name: "",
    cycle: "",
    sunlight: "",
    watering: "",
  };

  const [row, setRow] = useState<Omit<PlantType, "id">>(initialFormValues);
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRow({ ...row, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!row.name || !row.cycle || !row.sunlight || !row.watering) {
      setError("All fields are required.");
      return;
    }
    const newId = rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1;
    const newRow: PlantType = {
      id: newId,
      ...row,
    };
    rowDispatch({ type: ADD_ROW, payload: newRow });
    modalDispatch({ type: UNSET_MODAL });
    // console.log("submitted");
    setRow(initialFormValues);
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      {error && <p className={style["form__error"]}>{error}</p>}
      <div>
        <label className={style["form__group"]}>
          Name
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={row.name}
          />
        </label>
      </div>
      <div>
        <label className={style["form__group"]}>
          Cycle
          <input
            type="text"
            name="cycle"
            onChange={handleInputChange}
            value={row.cycle}
          />
        </label>
      </div>
      <div>
        <label className={style["form__group"]}>
          Sunlight
          <input
            type="text"
            name="sunlight"
            onChange={handleInputChange}
            value={row.sunlight}
          />
        </label>
      </div>
      <div>
        <label className={style["form__group"]}>
          Watering
          <input
            type="text"
            name="watering"
            onChange={handleInputChange}
            value={row.watering}
          />
        </label>
      </div>
      <button className={style["form__button"]} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
