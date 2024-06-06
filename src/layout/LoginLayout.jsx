import React from 'react';
import ManuBar from '../pages/Shared/ManuBar/ManuBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
         <ManuBar></ManuBar>
         <Outlet></Outlet>
            
        </div>
    );
};

export default LoginLayout;