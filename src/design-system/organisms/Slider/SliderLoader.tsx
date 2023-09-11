import styles from './styles.module.css'

const SliderLoader = () => {

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderCard}>
        <div className={`${styles.imgLoader} skeleton`}>
        </div>
        <div className={`${styles.content} ${styles.contentLoader}`}>
          <div>
            <h1 className='skeleton'></h1>
            <h1 className='skeleton'></h1>
          </div>
          <h1 className='skeleton'></h1>
        </div>
      </div>
    </div>
  )
}

export default SliderLoader