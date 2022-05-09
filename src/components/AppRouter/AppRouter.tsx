import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '../../routers';
import { RoutePaths } from '../../routers';

const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route path='' element={<Navigate to={RoutePaths.USERS} replace/>}/> 
            {publicRoutes.map((route) => 
                <Route 
                    key={route.path} 
                    path={route.path} 
                    element={<route.element />}
                />
            )}
            <Route path='/*' element={<Navigate to={RoutePaths.PAGE_NOT_FOUND} replace/>}/> 
        </Routes>
    );
}

export default AppRouter;