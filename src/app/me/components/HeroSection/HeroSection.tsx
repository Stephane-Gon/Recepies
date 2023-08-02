import styles from './styles.module.css'

const HeroSection = async () => {

  return (
    <div className={styles.wrapper}>
      <h1>ABOUT ME</h1>
      <li>
        My name is Stéphane Ribeiro and I&#39;m currently working as a frontend developer, in a tech company in Portugal,
        I also do projects like this one (some of them serve no purpose) for fun usually to put in practice new skills
        I learned;
      </li>
      <li>If you fell like learning a bit more of me just check out my real <a target='__blank' href='https://stephane-portfolio.herokuapp.com/'>portfolio</a>.</li>
    </div>
  )
}

export default HeroSection