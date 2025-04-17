import Image from "next/image";
import styles from "./page.module.css";
import Search from "@/containers/search/Search";

export default function Home() {
  return (
    <div className={styles.page}>
      <Search/>
    </div>
  );
}
