import { useEffect, useState } from "react";
import { useDebounce } from "useDebounce";
import { ParkFormProps } from "./types";
import styles from "./ParkForm.module.scss";

export const ParkForm: React.FC<ParkFormProps> = ({ onSubmit }) => {
  const [parksList, setParksList] = useState("");
  // If we decide to have search on type
  // const debouncedLocationName = useDebounce(parksList, 500);

  // useEffect(() => {
  //   onSubmit(parksList);
  // }, [debouncedLocationName]);

  const parksListChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setParksList(event.target.value);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(parksList);
    setParksList("");
  };

  return (
    <form onSubmit={submitHandler} className={styles.park_form}>
      <input
        type={"text"}
        placeholder={"Please provide the park name(s)"}
        onChange={parksListChangeHandler}
        value={parksList}
      />
      <button type={"submit"}>Search</button>
    </form>
  );
};
