import styles from './service.module.css'
import Link from "next/link"

const servicePage = () => {
    return (
        <div>
        <div className= {styles.nav}>
            <Link href="#" className={styles.tittle}>ServicePage</Link>
          <nav>
            <ul className={styles.navwrapper}>
           <li> <Link href="/">Home</Link></li>
           <li><Link href="/about">About</Link></li>
           <li><Link href="/product">Products</Link></li>
           <li><Link href="/contact">contact us</Link></li>
            </ul>
          </nav>
          </div>
          <div className={styles.herosection}>
            <h2 className={styles.herotittle}>This is ServicePage</h2>
          </div>
          
          </div>
)
}

export default servicePage;