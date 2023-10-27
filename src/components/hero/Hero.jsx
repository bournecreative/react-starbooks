import { createUseStyles } from 'react-jss'
import { Button } from '../button/Button'
import { ScrollIndicator } from '../scrollIndicator/ScrollIndicator';

const useStyles = createUseStyles({
        hero: {
            backgroundColor: '#0e0d15',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            boxSizing: 'border-box',
            boxShadow: '0 0 20px 20px #D3D6FF',
            color: "#FFF",
            padding: '40px',
            position: 'relative',
            height: '300px',
            width: '100%',
            zIndex: '1',
            '&:before': {
                background: '#000',
                content: '""',
                display: 'block',
                height: '100%',
                left: 0,
                opacity: '0.5',
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: '-1'
            },
            '@media (min-width: 1024px)': {
                '&:before': {
                    display: 'none'
                }
            },
            '@media (min-width: 980px)': {
                borderRadius: '40px',
                '&:before': {
                    borderRadius: '40px',
                    opacity: '0.7',
                }
            },
            '@media (min-width: 768px)': {
                height: '600px',
            }
        },
        content: {
            paddingTop: '100px',
            width: '100%',
            '@media (min-width: 768px)': {
                paddingTop: '120px',
            },
            '@media (min-width: 1200px)': {
                paddingTop: '144px',
            }
        },
        body: {
            display: 'none',
            '@media (min-width: 768px)': {
                color: '#7e7fa2',
                display: 'block',
                fontSize: '16px',
                fontWeight: '100',
                lineHeight: 1.4,
                margin: '0 0 24px 0',
                width: '465px',
               
            },
            '@media (min-width: 1200px)': {
                width: '643px',
            }
        },
        heading: {
            fontSize: '32px',
            '@media (min-width: 768px)': {
                fontSize: '90px',
                lineHeight: 1,
                margin: '64px 0 36px 0',
            }
        },
        tagline: {
            fontSize: '12px',
            fontWeight: '100',
            '@media (min-width: 768px)': {
                fontSize: '18px',
               
            }
        },
        heroScrollMarker: {
            display: 'none',
            '@media (min-width: 1200px)': {
                bottom: '40px',
                display: 'block',
                position: 'absolute',
                right: '40px',
            }
        }

    })

export const Hero = ({ bgImage, heading, tagline, body }) => {
    const styles = useStyles();
    
    const handleClick = () => {
        console.log("pass callback function to button")
    }

    return (
        <div className={styles.hero} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={styles.content}>
                <span className={styles.tagline}>{tagline}</span>
                <h1 className={styles.heading}>{heading}</h1>
                <p className={styles.body}>{body}</p>
                <Button handleClick={handleClick} label="See What's News" />
            </div>
            <div className={styles.heroScrollMarker}>
                <ScrollIndicator/>
            </div>
        </div>
    )
}