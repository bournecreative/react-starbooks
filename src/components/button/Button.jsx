import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    buttonPrimary: {
        background: 'linear-gradient(to right, #FF00EB, #00FFE2)',
        border: 'none',
        borderRadius: '40px',
        color: '#000',
        cursor: 'pointer',
        fontSize: '9px',
        padding: '8px 16px',
        position: 'relative',
        zIndex: '0',
        '&:after': {
            content: '""',
            background: '#FFF',
            borderRadius: '40px',
            bottom: '3px',
            height: 'calc(100% - 3px)',
            left: 0,
            position: 'absolute',
            width: 'calc(100% - 3px)',
            zIndex: '-1',
        },
        '@media (min-width: 768px)': {
            fontSize: '16px',
            padding: '16px 25px',
            '&:after': {
                bottom: '5px',
                height: 'calc(100% - 5px)',
                width: 'calc(100% - 5px)',
            }
        }
    }
})

export const Button = ({handleClick, label}) => {
    const styles = useStyles();  
    return (
        <button className={styles.buttonPrimary} onClick={() => handleClick()}>{label}</button>
    )
}