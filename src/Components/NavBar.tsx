import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {
    Box,
    Chip,
    FormControl,
    MenuItem,
    Select,
    Typography 
} from '@material-ui/core';
import {
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core/styles'
import WelcomeMessage from './WelcomeMessage';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Login from './Login';
import { AuthContext } from './../reducer/AuthContext';


const useStyles = makeStyles((theme: Theme) => createStyles({
    positionSelect: {
        color: 'white',
        borderBottom: '1px solid white',
    }
}))

const NavBar = () => {
     
    //styles for component
    const classes = useStyles()

    //context
    const { language, status } = useContext(ProgressContext)
    const { theme } = useContext(ThemeContext)
    const { authInfo: 
            { isAuthenticated },
             toggleAuth 
          } = useContext(AuthContext)

    //state
    const [position, setPosition] = useState<string>('Fullstack Developer')
    const [time, setTime] = useState<Date>(() => new Date(Date.now()))
    const [loginOpen, setLoginOpen] = useState(false);

    useEffect(() => {
      const timer = setInterval(
          () => 
               setTime(new Date(Date.now()))
          , 1000)
      return () => clearInterval(timer)
    }, []);


    const onPositionChange = (
        event : ChangeEvent<{ value: unknown }>
        ) => 
         setPosition(event.target.value as string)
    
    return (
        <AppBar position='static' color={theme}>
            <Toolbar>
                <Box
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 width={1}
                 py={2}
                 >
                     <Typography variant='h6'>
                         My movies
                     </Typography>

                     <Box textAlign='center'>
                        <WelcomeMessage 
                          position= {position}
                        />
                        <Chip label = {`Hello ${language} at ${status}`} />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                  className={classes.positionSelect} 
                                  value={position}
                                  onChange={onPositionChange}
                                >
                                    <MenuItem value="Fullstack Developer">
                                        Fullstack Developer
                                    </MenuItem>

                                    <MenuItem value="Front-End Developer">
                                        Front-End Developer
                                    </MenuItem>

                                    <MenuItem value="Back-End Developer">
                                        Back-End Developer
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                     </Box>

                     <Box textAlign='center'>
                         <Box my={1}>
                            <Typography variant='h6'>
                               {time.toUTCString()}
                            </Typography>
                         </Box>
                         <Button 
                           onClick={ isAuthenticated ? () => toggleAuth('') : () => setLoginOpen(true) }
                           variant='contained'
                         >
                            {isAuthenticated ? 'LogOut' : 'LogIn'}
                         </Button>
                         <Login 
                          isOpen={loginOpen}
                          handleClose={setLoginOpen}
                         />
                     </Box>
                 </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
