import { Fab } from '@material-ui/core';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        floatBtn: {
           position: 'fixed',
           right: '3rem',
           bottom: '3rem',
       }
   })
)

const ToggleThemeButton = () => {

    const classes = useStyles()
    
    //context
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <Fab
            onClick={toggleTheme.bind(this, theme === 'primary' ? 'secondary' : 'primary')}
            color='primary'
            variant="extended"
            className={classes.floatBtn}
        >
            Toggle Theme
        </Fab>
    )
}

export default ToggleThemeButton
