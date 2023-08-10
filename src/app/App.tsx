import React, {useCallback, useEffect, useLayoutEffect} from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {AppRootStateType, useAppDispatch, useAppSelector} from './store'
import {initializeAppTC, RequestStatusType} from './app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {Menu} from '@mui/icons-material';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {Login} from "../features/Login/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {logoutTC} from "../features/Login/auth-reducer";


function App() {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>((state) => state.app.isInitial)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, []);


    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])


    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Log out</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>

            </Container>
            <Routes>
                <Route path={'/'} element={<TodolistsList/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'404'} element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to={'404'}/>}/>
            </Routes>

        </div>
    )
}

export default App
