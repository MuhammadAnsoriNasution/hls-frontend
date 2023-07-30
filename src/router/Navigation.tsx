import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from '.';

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route) =>
                        <Route path={route.path}
                            element={
                                <Suspense fallback="Loading">
                                    <>{route.element}</>
                                </Suspense>
                            }
                        />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}
