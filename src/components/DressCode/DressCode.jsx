import styles from './DressCode.module.css'
import { useRef, useEffect } from 'react'

import girl1 from '../../assets/dresses/girl_1.png'
import girl2 from '../../assets/dresses/girl_2.png'
import girl3 from '../../assets/dresses/girl_3.png'
import girl4 from '../../assets/dresses/girl_4.png'
import boy1 from '../../assets/dresses/boy_1.png'
import boy2 from '../../assets/dresses/boy_2.png'

const colors = [
  { hex: '#70824e', name: 'Название цвета' },
  { hex: '#88a757', name: 'Название цвета' },
  { hex: '#b5c682', name: 'Название цвета' },
  { hex: '#4a2711', name: 'Название цвета' },
  { hex: '#d7b695', name: 'Название цвета' },
  { hex: '#8c6141', name: 'Название цвета' },
]

const girlImages = [girl1, girl2, girl3, girl4]
const boyImages = [boy1, boy2]


function Carousel({ images }) {
  const ref = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - ref.current.offsetLeft
    scrollLeft.current = ref.current.scrollLeft
    ref.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    ref.current.scrollLeft = scrollLeft.current - walk
  }

  const onMouseUp = () => {
    isDragging.current = false
    ref.current.style.cursor = 'grab'
  }

  return (
    <div
      className={styles.carousel}
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{ cursor: 'grab' }}
    >
      {images.map((img, i) => (
        <div key={i} className={styles.carouselItem}>
          <img
            src={img}
            alt={`Образ ${i + 1}`}
            className={styles.carouselImg}
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}



export default function DressCode() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Дресс-код</h2>
      <p className={styles.subtitle}>
        Будем рады, если ваши наряды поддержат атмосферу праздника.
      </p>

      <div className={styles.palette}>
        {colors.map((color, i) => (
          <div key={i} className={styles.colorItem}>
            <div
              className={styles.colorRect}
              style={{ backgroundColor: color.hex }}
            />
            <span className={styles.colorName}>{color.name}</span>
          </div>
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Идеи для девушек</h3>
      <Carousel images={girlImages} />

      <h3 className={styles.sectionTitle}>Идеи для парней</h3>
      <Carousel images={boyImages} />
    </div>
  )
}