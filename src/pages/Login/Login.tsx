import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


interface Error {
    username?: string,
    password?: string
}

const Login: FC = () => {
    const navigate = useNavigate();

    const [fields, setFields] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState<Error>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFields(previousFields => ({
            ...previousFields,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors(({
            ...errors,
            username: fields.username.trim() === '' ? 'Usuário é obrigatório' : '',
            password: fields.password.trim() === '' ? 'A senha é obrigatória' : ''
        }));

        if (!errors.username && !errors.password) {
            navigate("/profile");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Usuário"
                        value={fields.username}
                        onChange={handleChange}
                    />
                    {errors.username && <span className="error"> <b>{errors.username}</b></span>}
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Senha"
                        value={fields.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error"> <b>{errors.password}</b></span>}
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;