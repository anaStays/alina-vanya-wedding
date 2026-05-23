import styles from './WeddingCalendar.module.css'

const DAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const AUGUST_2026 = [
  [null, null, null, null, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
  [31, null, null, null, null, null, null],
]

const WEDDING_DAY = 1

export default function WeddingCalendar() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.dateXlText}>
        <span className={styles.dateHighlight}>Дорогие гости!</span>
      </p>

      <p className={styles.intro}>
        Мы будем счастливы разделить радость неповторимого дня с вами!
        Приглашаем украсить свадьбу своим присутствием
        и стать частью нашей семейной истории!
      </p>

      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <span className={styles.month}>Август</span>
          <span className={styles.year}>2026</span>
        </div>

        <div className={styles.grid}>
          {DAYS.map(day => (
            <div key={day} className={styles.dayName}>{day}</div>
          ))}

          {AUGUST_2026.map((week, wi) =>
            week.map((day, di) => (
              <div
                key={`${wi}-${di}`}
                className={`${styles.day} ${day === WEDDING_DAY ? styles.weddingDay : ''} ${!day ? styles.empty : ''}`}
              >
                {day && (
                  <>
                    {day === WEDDING_DAY && <RingSVG />}
                    <span className={styles.dayNumber}>{day}</span>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <p className={styles.dateText}>
        Ждём вас <span className={styles.dateHighlight}>1 августа 2026 года</span>🤍
      </p>

    </div>
  )
}

function RingSVG() {
  return (
    <svg
      className={styles.ring}
      viewBox="240 45 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(340, 155) rotate(30)">
        <circle cx="0" cy="0" r="52" fill="none" stroke="currentColor" strokeWidth="6"/>
        <line x1="-8" y1="-50" x2="-10" y2="-68" stroke="currentColor" strokeWidth="2"/>
        <line x1="8" y1="-50" x2="10" y2="-68" stroke="currentColor" strokeWidth="2"/>
        <polygon points="0,-90 -18,-72 18,-72" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="0" y1="-90" x2="0" y2="-72" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="-9" y1="-81" x2="9" y2="-81" stroke="currentColor" strokeWidth="0.8"/>
        <polygon points="-18,-72 18,-72 10,-58 -10,-58" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="-18" y1="-72" x2="0" y2="-58" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="18" y1="-72" x2="0" y2="-58" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="0" y1="-72" x2="0" y2="-58" stroke="currentColor" strokeWidth="0.8"/>
        <polygon points="-10,-58 10,-58 0,-52" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1"/>
      </g>
    </svg>
  )
}