import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {loginSchema, type LoginSchemaType} from "../schemas/login.schema"
import useLogin from '../hooks/useLogin';

const LoginForm = () => {   
    const {register, handleSubmit, formState:{errors}} = useForm<LoginSchemaType>({
        resolver:zodResolver(loginSchema),
        mode: "onTouched"
    })
    const loginMutation = useLogin();
    const onSubmit = (data:LoginSchemaType) => {
        loginMutation.mutate(data);
    };
    return (
        <div className="login-form">
            <h2>Login</h2>  
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input {...register("email")}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>  
                    <input {...register("password")}/>
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button disabled={loginMutation.isPending} type="submit">
                    {loginMutation.isPending ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;