import { FC, FormEvent, useEffect, useState } from "react";
import { useRowsContext } from "../../hooks/contexts/useRowsContext";
import { useModalContext } from "../../hooks/contexts/useModalContext";
import { PlantType } from "../../models/plant";
import { ADD_ROW, UNSET_MODAL, UPDATE_ROW } from "../../constants/actions";
import Dropdown from "../Dropdown/Dropdown3";
import style from "./Form.module.scss";

type FormProps = {
  rowId?: number;
};

const Form: FC<FormProps> = ({ rowId }) => {
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

  useEffect(() => {
    if (rowId !== undefined) {
      const existingRow = rows.find((r) => r.id === rowId);
      if (existingRow) {
        setRow(existingRow);
      }
    }
  }, [rowId, rows]);

  const handleInputChange = (name: string, value: string) => {
    setRow({ ...row, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!row.name || !row.cycle || !row.sunlight || !row.watering) {
      setError("All fields are required.");
      return;
    }

    if (rowId !== undefined) {
      rowDispatch({ type: UPDATE_ROW, payload: { id: rowId, ...row } });
    } else {
      const newId = rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1;
      const newRow: PlantType = {
        id: newId,
        ...row,
      };
      rowDispatch({ type: ADD_ROW, payload: newRow });
    }

    modalDispatch({ type: UNSET_MODAL });
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
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            value={row.name}
          />
        </label>
      </div>

      <Dropdown
        label="Cycle"
        name="cycle"
        value={row.cycle}
        onChange={handleInputChange}
      />

      <Dropdown
        label="Sunlight"
        name="sunlight"
        value={row.sunlight}
        onChange={handleInputChange}
      />

      <Dropdown
        label="Watering"
        name="watering"
        value={row.watering}
        onChange={handleInputChange}
      />

      <div className={style["form__buttons"]}>
        <button onClick={() => modalDispatch({ type: UNSET_MODAL })}>
          Cancel
        </button>
        <button className={style["form__submit-button"]} type="submit">
          {rowId !== undefined ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Form;
