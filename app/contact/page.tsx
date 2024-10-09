import Link from 'next/link'
import styles from './contact.module.css'
const contactPage = () => {
    return(
        <div>
        <div className={styles.contactnav}>
            <Link href="#" className={styles.contactnavtittle}>ContactPage</Link>
          <nav>
            <ul className={styles.contactnavwrapper}>
           <li> <Link href="/service">service</Link></li>
           <li><Link href="/about">About</Link></li>
           <li><Link href="/product">Products</Link></li>
           <li><Link href="/contact">contact us</Link></li>
            </ul>
          </nav>
          </div>
          <div className={styles.contactsection}>
            <h2 className={styles.contacttittle}>This is Contactpage</h2>
          </div>
          
          </div>
      );
}

export default contactPage;