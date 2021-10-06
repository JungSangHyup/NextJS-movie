import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.css";

function Navigation() {
  return (
    <div className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Navigation;
