import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React with ESI</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          React with ESI
        </h1>
        <br />
        <p className={styles.description}>
          Thank's to <a href="https://github.com/dunglas/react-esi" className={styles.card}>react-esi</a>
        </p>

        <p className={styles.description}>
          Demo Github Repository <a href="https://github.com/dunglas/react-esi" className={styles.card}>react-esi-demo</a>
        </p>
      </main>

      <footer className={styles.footer}>
        This Repository has <span style={{ fontWeight: 'bold', margin: 'O 5px'}}>25</span> stars.
      </footer>
    </div>
  )
}
