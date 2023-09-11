import React from 'react'
import styles from './styles.module.css'

const MainCardLoading = () => {
  return (
    <div className={styles.mainCardWrapper}>
      <div className={styles.leftContent}>

        <div className={styles.mainCardItemLoader}>
          <span>
            <h1 className={`${styles.itemTextLoader} skeleton`}></h1>
            <h4 className={`${styles.itemTextLoader} skeleton`}></h4>
          </span>
          <span className={`${styles.itemIconLoader} skeleton`}></span>
        </div>

        <div className={styles.mainCardItemLoader}>
          <span>
            <h1 className={`${styles.itemTextLoader} skeleton`}></h1>
            <h4 className={`${styles.itemTextLoader} skeleton`}></h4>
          </span>
          <span className={`${styles.itemIconLoader} skeleton`}></span>
        </div>

        <div className={styles.mainCardItemLoader}>
          <span>
            <h1 className={`${styles.itemTextLoader} skeleton`}></h1>
            <h4 className={`${styles.itemTextLoader} skeleton`}></h4>
          </span>
          <span className={`${styles.itemIconLoader} skeleton`}></span>
        </div>

        <div className={styles.mainCardItemLoader}>
          <span>
            <h1 className={`${styles.itemTextLoader} skeleton`}></h1>
            <h4 className={`${styles.itemTextLoader} skeleton`}></h4>
          </span>
          <span className={`${styles.itemIconLoader} skeleton`}></span>
        </div>

      </div>
      <div className={`${styles.mainCardImageLoader} skeleton`}>

      </div>
      <div className={styles.rightContent}>
        <h1 className={`${styles.itemTextLoader} skeleton`}></h1>
          <h4 className={`${styles.itemTextLoader} skeleton`}></h4>
      </div>
    </div>
  )
}

export default MainCardLoading