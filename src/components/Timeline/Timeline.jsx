import styles from './Timeline.module.css'

const events = [
  {
    time: '15:00',
    title: 'Сбор гостей',
    text: 'Время пролетит незаметно за игристым и общением с другими гостями',
    align: 'left',
  },
  {
    time: '16:00',
    title: 'Церемония',
    text: 'Готовьтесь стать свидетелями самого важного «Да!» в нашей жизни',
    align: 'right',
  },
  {
    time: '17:00',
    title: 'Банкет',
    text: 'Будет много танцев, веселья, поздравлений и, конечно, любви',
    align: 'left',
  },
  {
    time: '22:00',
    title: 'Окончание вечера',
    text: 'Завершение праздника и трансфер в город',
    align: 'right',
  },
]

export default function Timeline() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>План вечера</h2>

      <div className={styles.timeline}>
        <WaveSVG />

        {events.map((event, i) => (
          <div
            key={i}
            className={`${styles.event} ${event.align === 'right' ? styles.eventRight : styles.eventLeft}`}
          >
            <p className={styles.time}>{event.time}</p>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.text}>{event.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function WaveSVG() {
  return (
    <svg
      className={styles.wave}
      viewBox="0 0 300 1470"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M150 0
          C150 80, 280 140, 265 300
          C250 460, 30 420, 20 580
          C10 740, 270 740, 260 900
          C250 1060, 30 1040, 35 1200
          C45 1320, 180 1360, 150 1400"
        stroke="var(--invite-frame-light)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

