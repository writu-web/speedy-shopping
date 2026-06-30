import { lazy, Suspense } from "react"
import LoginForm from "./LoginForm"

const RegisterForm = lazy(() => import("./RegisterForm"))

const AuthPage = ()=>{
    return(
        <div>
            <LoginForm/>
            <Suspense fallback={<div>Loading...</div>}>
                <RegisterForm/>
            </Suspense>
        </div>
    )
}
export default AuthPage