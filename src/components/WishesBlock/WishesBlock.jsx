import styles from './WishesBlock.module.css'
import money from '../../assets/money.png'
import flowers from '../../assets/flowers.png'
import petard from '../../assets/petard.png'
import dress from '../../assets/dress.png'

const wishes = [
  {
    icon: money,
    title: 'Дарите конверты',
    text: 'Лучший подарок для нас — ваша забота о нашем будущем. Мы будем искренне рады каждому конверту.',
    align: 'left',
  },
  {
    icon: flowers,
    title: 'Приходите без цветов',
    text: 'Мы обожаем цветы, но в этот день некуда их поставить, но вашей улыбке всегда найдётся место.',
    align: 'right',
  },
  {
    icon: petard,
    title: 'Без хлопушек и конфетти',
    text: 'Торжество пройдёт в заповедной зоне, где живут животные. Из уважения к природе и её обитателям просим обойтись без хлопушек.',
    align: 'left',
  },
  {
    icon: dress,
    title: 'Дресс-код',
    text: 'Просим девушек воздержаться от белого — цвет в этот день принадлежит невесте.',
    align: 'right',
  },
]

export default function WishesBlock() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Пожелания гостям</h2>

      <div className={styles.list}>
        {wishes.map((wish, i) => (
          <div
            key={i}
            className={`${styles.item} ${wish.align === 'right' ? styles.itemRight : styles.itemLeft}`}
          >
            <img src={wish.icon} alt={wish.title} className={styles.icon} />
            <div className={styles.text}>
              <h3 className={styles.wishTitle}>{wish.title}</h3>
              <p className={styles.wishText}>{wish.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}