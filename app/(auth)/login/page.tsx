import React from "react";
import Image from "next/image";
import styles from "./login.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={"/logo.svg"} alt={"asder"} width={160} height={160} />

        <h2>Welcom Back!</h2>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <div className={styles.forg}>
          <input type="checkbox" />
          <a href="./">forgot password?</a>
        </div>
        <button>Login</button>
      </form>
      <div className={styles.footer}></div>
    </div>
  );
};

export default page;
