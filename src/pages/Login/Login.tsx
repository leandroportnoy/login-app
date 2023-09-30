import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doAuth, fetchLogin } from "../../services/Auth";
import styled from "styled-components";
import { AuthRequest } from "../../models/AuthRequest";

interface Error {
    username?: string,
    password?: string
}


const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  margin-bottom: 15px;
  input {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  display: block;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Login: FC = () => {

    const navigate = useNavigate();

    const [fields, setFields] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [networkError, setNetworkError] = useState({ message: '' });


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFields(previousFields => ({
            ...previousFields,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = {
            username: fields.username.trim() === '' ? 'Usuário é obrigatório' : '',
            password: fields.password.trim() === '' ? 'A senha é obrigatória' : ''
        };

        setErrors(newErrors);
        setNetworkError({ message: '' });

        if (!newErrors.username && !newErrors.password) {
            console.log('aqui')
            const authRequest = {
                username: fields.username,
                password: fields.password,
            };

            try {
                const response = await fetchLogin(authRequest);
                console.log(response);
                // Handle successful login here
            } catch (error) {
                setNetworkError({ message: 'Usuário e/ou senha estão inválidos' });
                console.error('There was a problem with the Axios request:', error);
            }
        }
    };

    return (
        <Container>
            <FormWrapper>
                <Title>Login</Title>
                <form onSubmit={handleSubmit}>
                    <InputField>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Usuário"
                            value={fields.username}
                            onChange={handleChange}
                        />
                        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                    </InputField>
                    <InputField>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Senha"
                            value={fields.password}
                            onChange={handleChange}
                        />
                        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                    </InputField>
                    <div>
                        <SubmitButton type="submit">Login</SubmitButton>
                    </div>
                    {networkError.message && <ErrorMessage>{networkError.message}</ErrorMessage>}
                </form>
            </FormWrapper>
        </Container>

    )
}

export default Login;