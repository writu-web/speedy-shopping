import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import {type RegisterSchemaType, RegisterSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
    const {register, handleSubmit, formState:{errors}}=useForm<RegisterSchemaType>({
        resolver:zodResolver(RegisterSchema),
        mode:"onTouched"
    })
    const RegisterMutation = useRegister();

    const handleRegister = (data:RegisterSchemaType) => {
        RegisterMutation.mutate(data);
    }
    return (
        <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input data-test="register-username" {...register("username")}/>
                    {errors.username && <p>{errors.username.message}</p>}

                </div>
                <div className="form-group">    
                <label htmlFor="email">Email</label>
                    <input data-test="register-email" {...register("email")} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input data-test="register-password" {...register("password")} />
                    {errors.password && <p>{errors.password.message}</p>}

                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;