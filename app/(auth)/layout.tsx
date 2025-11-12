import Link from "next/link";
import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {children}
        <div className="terms">
          By signing up, you agree to our{" "}
          <Link className={styles.lnk} href={"/"}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className={styles.lnk} href={"/"}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
