import styles from './about.module.css'
import Link from 'next/link'

const aboutPage = () => {
    return(
        <div>
        <div className= {styles.aboutnav}>
            <Link href="#" className={styles.title}>AboutPage</Link>
          <nav>
            <ul className={styles.aboutnavwrapper}>
           <li> <Link href="/">Home</Link></li>
           <li><Link href="/about">Service</Link></li>
           <li><Link href="/product">Products</Link></li>
           <li><Link href="/contact">contact us</Link></li>
            </ul>
          </nav>
          </div>
          <div className={styles.aboutsection}>
            <h2 className={styles.abouttittle}>This is AboutPage</h2>
          </div>
          
          </div>
    )
}
export default aboutPage;