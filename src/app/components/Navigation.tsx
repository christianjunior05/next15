import styles from '../styles/components/navigation.module.css'
import Link from 'next/link'


export default function Navigation(){
    return(
        <nav className={styles.container}>
          <ul className="flex justify-center align-center gap-5">
            <li className="text-white">
              <Link href="/">Accueil </Link>
            </li>
            <li className="text-white">
              <Link href="/about">A  Propos  </Link>
            </li>
            <li className="text-white">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="text-white">
              <Link href="/shop">Login</Link>
            </li>
            <li className="text-white">
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        
    )
}