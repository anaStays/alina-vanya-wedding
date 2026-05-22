import styles from './GamePage.module.css'

export default function GamePage({ onComplete }) {
  return (
    <div className={styles.page}>
      <h1>Game Page</h1>
      <button onClick={onComplete}>Далее →</button>
    </div>
  )
}