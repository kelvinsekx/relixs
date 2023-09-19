import styles from "./notes.module.css";

export function Notes({ children }: { children: string }) {
  if (children.length > 100) {
    console.error("Notes must be less than 50 chars");
    return "";
  }
  return <div className={styles.note}>{children}</div>;
}
