import Image from "next/image";
import Link from "next/link"
import styles from './page.module.css'
export default function Home() {
  return (
    <div>
    <div className={styles.navbar}>
        <Link href="#" className={styles.navtittle}>HomePage</Link>
      <nav>
        <ul className={styles.navwrapper}>
       <li> <Link href="/service">service</Link></li>
       <li><Link href="/about">About</Link></li>
       <li><Link href="/product">Products</Link></li>
       <li><Link href="/contact">contact us</Link></li>
        </ul>
      </nav>
      </div>
      <div className={styles.pagesection}>
        <h2 className={styles.pagetittle}>This is Homepage</h2>
      </div>
      
      </div>
  );
}
