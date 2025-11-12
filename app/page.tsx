import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hi Ahmed Here!</h1>
      <a href="/login">Login</a>
    </main>
  );
}
