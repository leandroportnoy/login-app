import { FC, Fragment } from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import { Main } from "../pages/Main/Main";
import { BrowserRouter } from "react-router-dom";

const RoutesApp: FC = () => {
    return (
        // <BrowserRouter>
        // <Fragment>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Main />} />
        </Routes>
        // </Fragment>
        // </BrowserRouter>
    );
}

export default RoutesApp