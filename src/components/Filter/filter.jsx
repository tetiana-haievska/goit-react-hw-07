import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Пошук контакту"
      value={filter || ""}
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;
