import styles from './InvitePage.module.css'
import InviteCard from '../../components/InviteCard/InviteCard'
import WeddingCalendar from '../../components/WeddingCalendar/WeddingCalendar'
import photo from '../../assets/photo.jpg'
import LocationBlock from '../../components/LocationBlock/LocationBlock'

export default function InvitePage() {
  return (
    <main className={styles.page}>
      <div className={styles.scroll}>
        <InviteCard
            photo={photo}
            bride="Иван"
            groom="Алина"
            date="01.08.2026"
        />
        <WeddingCalendar />
        <LocationBlock />
      </div>
    </main>
  )
}