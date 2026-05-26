import styles from './InviteCard.module.css'
import BottomPanel from '../BottomPanel/BottomPanel'
import WeddingCalendar from '../WeddingCalendar/WeddingCalendar'

export default function InviteCard({ photo, bride, groom, date }) {
  return (
    <div className={styles.frame}>
      <div className={styles.card}>

        {/* <div className={styles.topRow}>
          <span className={styles.monogram}>{bride[0]}&{groom[0]}</span>
          <span className={`${styles.date} num`}>{date}</span>
        </div> */}

        <div className={styles.photoStack}>
          <h1 className={styles.headlineTop}>Она сказала</h1>

          <div className={styles.photoWrap}>
            <div className={styles.photoBg} />
            <img
              src={photo}
              alt={`${bride} и ${groom}`}
              className={styles.photo}
            />
            <h2 className={styles.headlineBottom}>Да!</h2>
          </div>
        </div>

        <p className={styles.subtitle}>
          и теперь, мы ждём вас на нашу свадьбу
        </p>

        {/* <BottomPanel
          quote={'Любить — это не смотреть друг на друга,\nлюбить — это вместе смотреть в одном направлении'}
          author={'Антуан де Сент-Экзюпери\n«Ветер, песок и звёзды»'}
        /> */}

        {/* <WeddingCalendar /> */}

      </div>
    </div>
  )
}