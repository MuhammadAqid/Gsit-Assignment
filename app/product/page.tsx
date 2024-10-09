import Link from "next/link"
import styles from './product.module.css'

const productPage = () => {
    return(
        <div>
        <div className= {styles.productnav}>
            <Link href="#" className={styles.navtitle}>ProductPage</Link>
          <nav>
            <ul className={styles.productnavwrapper}>
           <li> <Link href="/">Home</Link></li>
           <li><Link href="/about">Service</Link></li>
           <li><Link href="/product">Products</Link></li>
           <li><Link href="/contact">contact us</Link></li>
            </ul>
          </nav>
          </div>
          <div className={styles.productsection}>
            <h2 className={styles.producttittle}>This is ProductPage</h2>
          </div>
          
          </div>
    )
}

export default productPage;