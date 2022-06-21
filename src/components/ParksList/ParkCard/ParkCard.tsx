import { ParkCardProps } from "./types";
import styles from "./ParkCard.module.scss";

export const ParkCard: React.FC<ParkCardProps> = ({ parkData }) => {
  console.log(parkData);
  const { name, images } = parkData;

  return (
    <div className={styles.park_card}>
      <div className={styles.details}>
        <h5>{name}</h5>
      </div>
      <div className={styles.image_wrapper}>
        <img src={images[0].url} alt={images[0].title} />
      </div>
    </div>
  );
};
