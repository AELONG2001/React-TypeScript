import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'
import React, { ChangeEvent, useContext, useState } from 'react'
import { AuthContext } from '../reducer/AuthContext';

interface LoginProps {
    isOpen: boolean,
    handleClose:  React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ isOpen, handleClose }: LoginProps) => {

    //context
    const { toggleAuth } = useContext(AuthContext);

    const [username, setUsername] = useState('')
    
    const usernameChange = 
       (e: ChangeEvent<HTMLInputElement>) => 
          setUsername(e.target.value)

    const onLoginSubmit = () => {
        toggleAuth(username)
        setUsername('')
        handleClose(false)
    }
    
    return (
        <Dialog open={isOpen} onClose={() => handleClose(false)}>
            <DialogContent>
               <TextField
                 onChange={usernameChange}
                 value={username}
                 label='username'
                 required
               />
            </DialogContent>
            <DialogActions>
                <Button
                 color='primary'
                 variant='contained'
                 onClick={onLoginSubmit}
                 disabled={username === ''}
                >
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login
