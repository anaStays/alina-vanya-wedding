import styles from './EnvelopePage.module.css'
import envelope from '../../assets/envelope.png'
import seal from '../../assets/seal.png'

export default function EnvelopePage({ onComplete }) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <p className={styles.hint}>Нажмите на конверт, чтобы открыть приглашение</p>
        <div className={styles.envelopeWrap} onClick={onComplete}>
          <img src={envelope} alt="Конверт" className={styles.envelope} />
          <img src={seal} alt="Сургучная печать" className={styles.seal} />
        </div>
      </div>
    </main>
  )
}