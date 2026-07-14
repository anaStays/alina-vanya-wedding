import styles from './LocationBlock.module.css'
import location1 from '../../assets/location11.jpg'
import location2 from '../../assets/location12.jpg'

export default function LocationBlock() {
  const handleMapClick = () => {
    window.open(
      'https://yandex.ru/maps/193/voronezh/?ll=39.077039%2C51.633978&mode=poi&poi%5Bpoint%5D=39.076972%2C51.633994&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D180464763356&z=14',
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
          <p className={styles.venueName}>Груши и яблоки</p>
          <p className={styles.venueAddress}>
            СНТ Тихий Дон, Кленовая аллея, 6
          </p>
        </div>

      </div>

      <button className={styles.mapButton} onClick={handleMapClick}>
        Смотреть на карте
      </button>
    </div>
  )
}