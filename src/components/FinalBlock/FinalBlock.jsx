import styles from './FinalBlock.module.css'
import finalPhoto from '../../assets/final2.png'
import heart from '../../assets/heart.png'
import rings from '../../assets/rings.png'

const hearts = [
  { top: '10%', left: '5%', size: 32, rotate: -15 },
  { top: '15%', right: '11%', size: 24, rotate: 20 },
  { top: '28%', left: '12%', size: 20, rotate: -30 },
  { top: '36%', right: '4%', size: 36, rotate: 10 },
  { top: '50%', left: '6%', size: 28, rotate: 25 },
  { top: '60%', right: '10%', size: 22, rotate: -20 },
  { top: '75%', left: '3%', size: 34, rotate: -15 },
  { top: '80%', right: '6%', size: 26, rotate: 10 },
]

export default function FinalBlock() {
  return (
    <div className={styles.wrapper}>

      {hearts.map((h, i) => (
        <img
          key={i}
          src={heart}
          alt=""
          className={styles.heart}
          style={{
            top: h.top,
            left: h.left,
            right: h.right,
            width: h.size,
            height: h.size,
            transform: `rotate(${h.rotate}deg)`,
          }}
        />
      ))}

      <p className={styles.title}>
        С нетерпением ждём <br />
        на нашем празднике любви!
      </p>

      <div className={styles.photoWrap}>
        <img src={finalPhoto} alt="Иван и Алина" className={styles.photo} />
      </div>

      <p className={styles.signature}>
        Ваши Иван и Алина<br />
        <span className={styles.soon}>(скоро Фроловы!)</span>
      </p>
      <img src={rings} alt="Кольца" className={styles.rings} />
    </div>
  )
}