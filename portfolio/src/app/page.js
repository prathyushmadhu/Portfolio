import Image from "next/image";
import Link from "next/link";
import styles from "./globals.css"; // Import the custom CSS module

export default function Home() {
  return (
    <section className={styles.container}>
      <Image
        src="/prathyush.JPG"
        alt="Prathyush"
        width={200}
        height={200}
        className={styles.profileImage}
      />
      <h1 className={styles.heading}>Hi, I'm Prathyush</h1>
      <p className={styles.description}>
        A passionate web developer with expertise in crafting responsive, visually appealing websites using the latest technologies.
      </p>
      
      <div className={styles.buttonContainer}>
        <Link href="/experience" className={styles.button}>
          Experience
        </Link>
        <Link href="/projects" className={styles.button}>
          Projects
        </Link>
        <Link href="/contact" className={styles.button}>
          Contact
        </Link>
      </div>
    </section>
  );
}
