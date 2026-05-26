import styles from './LocationBlock.module.css'
import location1 from '../../assets/location1.jpg'
import location2 from '../../assets/location2.jpg'

export default function LocationBlock() {
  const handleMapClick = () => {
    window.open(
      'https://yandex.com/maps/org/farm_village/74039836796/?ll=39.255306%2C51.824713&mode=search&sll=39.253261%2C51.824796&sspn=0.013918%2C0.005082&text=%D1%81%D0%B5%D0%BB%D0%BE%20%D0%A7%D0%B5%D1%80%D1%82%D0%BE%D0%B2%D0%B8%D1%86%D1%8B%2C%20%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D1%91%D0%B6%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2024%D0%91%20farm%20village&z=17.01',
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