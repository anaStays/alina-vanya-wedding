import styles from './EnvelopePage.module.css'

export default function EnvelopePage({ onComplete }) {
  return (
    <div className={styles.page}>
      <h1>Envelope Page</h1>
      <button onClick={onComplete}>Далее →</button>
    </div>
  )
}