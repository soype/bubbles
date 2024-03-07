
import styles from "./page.module.scss";

import Bubbles from "./components/bubbles";

export default function Home() {
  return (
    <main className={styles.main}>
      <Bubbles></Bubbles>
    </main>
  );
}
