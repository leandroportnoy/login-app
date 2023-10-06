import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'


const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes