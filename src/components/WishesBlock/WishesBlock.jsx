import styles from './WishesBlock.module.css'
import money from '../../assets/money.png'
import flowers from '../../assets/flowers.png'
import petard from '../../assets/petard.png'
import dress from '../../assets/dress.png'

const wishes = [
  {
    icon: money,
    title: 'Дарите конверты',
    text: 'Чтобы ваши руки были свободны для объятий, будем рады легким подаркам в конвертах.',
    align: 'left',
  },
  {
    icon: flowers,
    title: 'Приходите без цветов',
    text: 'Приятным комплиментом для нас вместо цветов будет бутылочка вина или символический подарок на ваш вкус.',
    align: 'right',
  },
  {
    icon: petard,
    title: 'Без хлопушек и конфетти',
    text: 'Рядом с местом проведения свадьбы располагается контактный зоопарк. Из уважения к природе и её обитателям просим обойтись без хлопушек.',
    align: 'left',
  },
  {
    icon: dress,
    title: 'Дресс-код',
    text: 'Будем благодарны, если девушки в этот день избегут белого цвета. Пусть он останется особенным для невесты.',
    align: 'right',
  },
  {
    icon: dress,
    title: 'Удобная обувь',
    text: 'Банкет будет проходить на природе, рекомендуем выбрать удобную обувь или взять с собой сменную.',
    align: 'left',
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