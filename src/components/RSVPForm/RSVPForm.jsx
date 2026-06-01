import { useState } from 'react'
import styles from './RSVPForm.module.css'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfyFpk_RKYnfdab0zYz32O5HgcGVJgMG1SZXc8WfF8LGoko-A/formResponse'

const attendanceOptions = [
  'Я приду / Мы придем',
  'Приду с парой',
  'Прийти не получится',
]

const drinkOptions = [
  'Вино белое',
  'Вино красное',
  'Шампанское',
  'Водка',
  'Виски',
  'Коньяк',
  'Безалкогольный движ',
]

export default function RSVPForm() {
  const [attendance, setAttendance] = useState('')
  const [name, setName] = useState('')
  const [drinks, setDrinks] = useState([])
  const [allergy, setAllergy] = useState('')
  const [transfer, setTransfer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [comment, setComment] = useState('')

  const toggleDrink = (drink) => {
    setDrinks(prev =>
      prev.includes(drink)
        ? prev.filter(d => d !== drink)
        : [...prev, drink]
    )
  }

  const handleSubmit = async () => {
    if (!attendance || !name) return

    const params = new URLSearchParams({
      'entry.1811411003': attendance,
      'entry.1706712191': name,
      'entry.1423473394': drinks.join(', '),
      'entry.160616688': allergy || 'Нет',
      'entry.167029864': transfer,
      'entry.1249735204': comment,
    })

    try {
      await fetch(`${FORM_URL}?${params}`, {
        method: 'POST',
        mode: 'no-cors',
      })
    } catch (e) {
      
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.success}>
          <h3 className={styles.successTitle}>Спасибо!</h3>
          <p className={styles.successText}>Мы получили ответ!</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Анкета гостя</h2>
      <p className={styles.dateHighlight}><p className={styles.subtitle}>Пожалуйста, заполните до <span className="num">1</span> июля <span className="num">2026</span></p></p>

      <div className={styles.form}>

        {/* Присутствие */}
        <div className={styles.field}>
          <label className={styles.label}>Сможете ли присутствовать на торжестве?</label>
          <div className={styles.options}>
            {attendanceOptions.map(option => (
              <button
                key={option}
                className={`${styles.option} ${attendance === option ? styles.optionActive : ''}`}
                onClick={() => setAttendance(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* ФИО */}
        <div className={styles.field}>
          <label className={styles.label}>Имя Фамилия</label>
          <label className={styles.sublabel}>Если вы будете парой или семьей, напишите все имена и фамилии</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Имя Фамилия"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        {/* Напитки */}
        <div className={styles.field}>
          <label className={styles.label}>Предпочтения по напиткам</label>
          <div className={styles.options}>
            {drinkOptions.map(drink => (
              <button
                key={drink}
                className={`${styles.option} ${drinks.includes(drink) ? styles.optionActive : ''}`}
                onClick={() => toggleDrink(drink)}
              >
                {drink}
              </button>
            ))}
          </div>
        </div>

        {/* Аллергия */}
        <div className={styles.field}>
          <label className={styles.label}>Пищевая аллергия</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Укажите аллергены"
            value={allergy}
            onChange={e => setAllergy(e.target.value)}
          />
        </div>

        {/* Трансфер */}
        <div className={styles.field}>
          <label className={styles.label}>Нужен ли трансфер обратно?</label>
          <div className={styles.options}>
            {['Да, нужен', 'Нет, не нужен'].map(option => (
              <button
                key={option}
                className={`${styles.option} ${transfer === option ? styles.optionActive : ''}`}
                onClick={() => setTransfer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Пожелания и комментарии</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Напишите всё что хотите передать нам"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div>

        <button
          className={`${styles.submit} ${(!attendance || !name || !transfer) ? styles.submitDisabled : ''}`}
          onClick={handleSubmit}
          disabled={!attendance || !name || !transfer}
        >
          Отправить
        </button>

      </div>
    </div>
  )
}