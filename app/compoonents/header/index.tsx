import styles from "./styles.module.scss";
import Image from "next/image";

export default function Header() {
  return (
      <h1 className={styles.header}>
        <div>
          <Image src="/images/logo.png" alt="Logo" width={173} height={161}/>
        </div>
        <div>Writer&apos;s Room</div>
      </h1>
  )
}
