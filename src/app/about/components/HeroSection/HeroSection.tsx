import styles from './styles.module.css'

const HeroSection = async () => {

  return (
    <div className={styles.wrapper}>
      <h1>ABOUT THIS PROJECT</h1>
      <li>
        This project was made in order for me to test my NextJS 13 skills. I finished a course and
        felt like creating a personal project in order to put in practice what I just learned.
      </li>
      <li>
        So obviously I didn&#39;t focus on design, fancy animations or cool 3D effects, 
        I manly focused on the NextJS 13 features.
      </li>

      <h3>Main focus of this project:</h3>
      <ol>
        <li>New APP router;</li>
        <li>Server-Side components;</li>
        <li>Async Components;</li>
        <li>Data Fetching;</li>
        <li>User Authentication;</li>
      </ol>

      <h3>What can you actually do in this website:</h3>
      <ol>
        <li>Create account;</li>
        <li>Search Recepies;</li>
        <li>Get information about recepies;</li>
        <li>Add recepies to your favorites;</li>
      </ol>
    </div>
  )
}

export default HeroSection