import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '../pages/Main/Main.js'
import Login from '../pages/Login/Login.js'

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes