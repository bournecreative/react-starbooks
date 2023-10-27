import { createUseStyles } from 'react-jss'
import { Hero } from '../components/hero/Hero'
import heroImage from '../assets/satellite.png'

const useStyles = createUseStyles({
    page: {
      boxSizing: 'border-box',
      height: '100%',
      width: '100%',
      '@media (min-width: 980px)': {
        padding: '40px',
      }
    },
})

export const HomePage = () => {
  const styles = useStyles()

  const bodyText = 'Starbooks is your cosmic gateway to a limitless library, harnessing cutting-edge technology to instantly locate and access the universe of books. Embark on literary adventures that transcend time and space, as we make the search for knowledge a journey truly out of this world.'
  return (
    <div className={styles.page}>
      <Hero bgImage={heroImage} heading='STARBOOKS' tagline='EXPLORE WORLDS' body={bodyText}/>
    </div>
  )
}