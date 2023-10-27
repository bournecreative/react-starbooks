import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    scrollIndicator:{
        border: '3px solid #FFF',
        borderRadius: '40px',
        height: '70px',
        position: 'relative',
        width: '40px',
    },
    scrollIndicatorBlur: {
        animation: '$fade 3200ms infinite',
        height: '10px',
        background: 'linear-gradient(to bottom, transparent, #FFF)',
        position: 'absolute',
        marginLeft: '50%',
        opacity: 0,
        top: '20%',
        transform: 'translateX(-50%)',
        width: '10px',
    },
    scrollIndicatorWheel: {
        animation: '$scroll 3200ms infinite',
        background: '#FFF',
        borderRadius: '50%',
        height: '10px',
        marginLeft: '50%',
        opacity: 0,
        position: 'absolute',
        top: 0,
        transform: 'translateX(-50%)',
        width: '10px',
    },
    '@keyframes fade': {  
        '0%, 21%, 42%, 63%, 100%': {
            height: 0,
            opacity: 0,
        },
        '20%, 41%, 62%': {
            height: '60%',
            opacity: 1,
        },
      },
      '@keyframes scroll': {  
        '0%, 21%, 42%, 63%, 100%': {
          opacity: 0,
          top: 0,
        },
        '20%, 41%, 62%': {
          opacity: 1,
          top: '75%',
        },     
      }
})

export const ScrollIndicator = () => {
    const styles = useStyles()

    return (
        <div className={styles.scrollIndicator}>
            <span className={styles.scrollIndicatorBlur}></span>
            <span className={styles.scrollIndicatorWheel}></span>
      </div>
    )
}