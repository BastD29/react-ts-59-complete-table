import { ChangeEvent, FormEvent, useState } from "react";
import { useRowsContext } from "../../hooks/contexts/useRowsContext";
import { PlantType } from "../../models/plant";
import { ADD_ROW } from "../../constants/actions";
import style from "./Form.module.scss";
// import { useModalContext } from "../../hooks/contexts/useModalContext";

const Form: React.FC = () => {
  const { dispatch } = useRowsContext();
  // const { unsetModal } = useModalContext();

  const [row, setRow] = useState<PlantType>({
    id: 0,
    name: "",
    cycle: "",
    sunlight: "",
    watering: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRow({ ...row, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD_ROW, payload: row });
    // dispatch({})
    console.log("submitted");
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
