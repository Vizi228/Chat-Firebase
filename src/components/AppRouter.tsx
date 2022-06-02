import { privateRoutes, publicRoutes } from "../utils/routes"
import { Navigate, Route, Routes } from "react-router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from "react";
import { Context } from "..";

const AppRouter = (): JSX.Element => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth);
    return (
        <div>
            <Routes>
                {user
                    ?
                    <>
                        {privateRoutes.map((item, i) => (
                            <Route key={i} path={item.href} element={<item.component />} />
                        ))}
                        <Route path="*" element={<Navigate to='/chat' />} />
                    </>
                    :
                    <>
                        {publicRoutes.map((item, i) => (
                            <Route key={i} path={item.href} element={<item.component />} />

                        ))}
                        <Route path="*" element={<Navigate to='/' />} />
                    </>
                }
            </Routes>
        </div>
    )
}

export default AppRouter