import { ChangeEvent, FormEvent, useState } from "react";
import { useRowsContext } from "../../hooks/contexts/useRowsContext";
import { useModalContext } from "../../hooks/contexts/useModalContext";
import { PlantType } from "../../models/plant";
import { ADD_ROW, UNSET_MODAL } from "../../constants/actions";
// import { useRows } from "../../hooks/useRows2";
import style from "./Form.module.scss";

const Form: React.FC = () => {
  const { dispatch: rowDispatch, state: rows } = useRowsContext();
  // const { rows } = useRows();
  const { dispatch: modalDispatch } = useModalContext();

  const initialFormValues: Omit<PlantType, "id"> = {
    name: "",
    cycle: "",
    sunlight: "",
    watering: "",
  };

  const [row, setRow] = useState<Omit<PlantType, "id">>(initialFormValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRow({ ...row, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={row.name}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
