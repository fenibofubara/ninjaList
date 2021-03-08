import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
<>
  <Head>
   <title>Ninja List | Home </title>
   <meta name='keywords' content='ninjas'/>
  </Head>
  <div >
  <h1 className={styles.title}>Welcome page</h1>
  <p className={styles.text}>We use your personal information as this Privacy Statement describes. No matter where you are, where you live, or what your citizenship is, we provide the same high standard of privacy protection to all our users around the world, regardless of their country of origin or location.
Of course, the short version and the Summary below don't tell you everything, so please read on for more details.</p>
  <Link href='/ninjas/'><a className={styles.btn}>View all Ninja List</a></Link>

  </div>
</>

  )
}
