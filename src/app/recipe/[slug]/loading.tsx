import { MainCard } from "@/design-system/molecules/MainCard"
import styles from './styles.module.css'
import styles2 from './components/SecondSection/styles.module.css'

const Loading = () => {
  
  return (
    <div className={styles.wrapper}>
     <MainCard.Root>
        <MainCard.Loading />
     </MainCard.Root>
     <div className={styles2.wrapper}>
      <div className={styles2.section}>
          <h1 className="skeleton"></h1>
          <div className={styles2.labelsBox}>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
            <span className={`${styles2.normalLabel} skeleton`} style={{width: "200px", height: "30px;"}} > </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Loading