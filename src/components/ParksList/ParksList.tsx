import { ParkCard } from "./ParkCard";
import { ParksListProps, Park } from "./types";
import styles from "./ParksList.module.scss";

export const ParksList: React.FC<ParksListProps> = ({ parksListData }) => {
  return (
    <ul className={styles.parks_list}>
      {
        // pass only the data we need to Park component
        parksListData.map((parkData: Park) => (
          <li key={parkData.id}>
            <ParkCard parkData={parkData} />
          </li>
        ))
      }
    </ul>
  );
};
