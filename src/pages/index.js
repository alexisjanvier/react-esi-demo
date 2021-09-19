import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>React with ESI</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          React with ESI
        </h1>
        <br />
        <p className={styles.description}>
          Thanks to <a href="https://github.com/dunglas/react-esi" className={styles.card}>react-esi</a>
        </p>

        <p className={styles.description}>
          Demo Github Repository <a href="https://github.com/dunglas/react-esi" className={styles.card}>react-esi-demo</a>
        </p>
      </main>
    </>
  )
}
