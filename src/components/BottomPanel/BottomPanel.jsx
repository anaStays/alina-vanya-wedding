import styles from './BottomPanel.module.css'

export default function BottomPanel({ quote, author }) {
  return (
    <div className={styles.panel}>
      <div className={styles.corner + ' ' + styles.cornerTL} />
      <div className={styles.corner + ' ' + styles.cornerTR} />
      <div className={styles.corner + ' ' + styles.cornerBL} />
      <div className={styles.corner + ' ' + styles.cornerBR} />
      <p className={styles.quote}>{quote}</p>
      <p className={styles.author}>{author}</p>
    </div>
  )
}