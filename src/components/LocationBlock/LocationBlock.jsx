import styles from './LocationBlock.module.css'
import location1 from '../../assets/location1.jpg'
import location2 from '../../assets/location2.jpg'

export default function LocationBlock() {
  const handleMapClick = () => {
    window.open(
      'https://yandex.ru/maps/?text=село+Чертовицы,+Молодёжная+ул.,+24Б',
      '_blank'
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.photos}>

        <h2 className={styles.title}>Локация</h2>

        <div className={styles.photoCard}>
          <img src={location1} alt="Территория" className={styles.photo} />
        </div>

        <div className={`${styles.photoCard} ${styles.photoCardShifted}`}>
          <img src={location2} alt="Банкетный зал" className={styles.photo} />
        </div>

        <div className={styles.address}>
          <p className={styles.venueName}>Farm&amp;Village</p>
          <p className={styles.venueAddress}>
            село Чертовицы, Молодёжная ул., 24Б
          </p>
        </div>

      </div>

      <button className={styles.mapButton} onClick={handleMapClick}>
        Смотреть на карте
      </button>
    </div>
  )
}