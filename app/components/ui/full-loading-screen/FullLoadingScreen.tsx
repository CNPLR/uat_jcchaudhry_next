import Img from "../Img";
import styles from './FullLoadingScreen.module.css';

export default function FullLoadingScreen({isLoading = false}: {isLoading: boolean}) {
  return (
    <>
      {isLoading && (
         <div className={styles.container}>
          <div className={styles.loading} >
            <div className={styles.loading__letter}>L</div>
            <div className={styles.loading__letter}>o</div>
            <div className={styles.loading__letter}>a</div>
            <div className={styles.loading__letter}>d</div>
            <div className={styles.loading__letter}>i</div>
            <div className={styles.loading__letter}>n</div>
            <div className={styles.loading__letter}>g</div>
            <div className={styles.loading__letter}>.</div>
            <div className={styles.loading__letter}>.</div>
            <div className={styles.loading__letter}>.</div>
          </div>
        </div>
      )}
    </>
   
  )
}
