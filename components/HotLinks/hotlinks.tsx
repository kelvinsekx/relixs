import Link from "next/link";
import * as React from "react";
import styles from "./hotlinks.module.css";

export default function HotLinks({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <div className={styles.hotlink}>
      <span>
        <b>HOT</b> 🔥
      </span>
      <Link href={href}>{children}</Link>
    </div>
  );
}
