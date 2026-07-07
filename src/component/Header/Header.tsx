
import styles from "./Header.module.css";
import bgImage from "../../assets/flowers.jpg";

export default function Header() {
  return (
    <div 
      className={styles.headerContainer} 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.dateText}>Thur 9</div>
        <div className={styles.timeText}>6:23 AM</div>
      </div>
    </div>
  );
}