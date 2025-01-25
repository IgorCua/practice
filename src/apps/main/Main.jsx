import React, { useState, useEffect } from "react";
import Codility from "../codility/codility";
import { MyForm } from "../../components/form/Form";
// Use functional or class component based on your preference.
// Make it a default export.
export function Main({ onSubmit }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const handleNameChange = (event) => {
        setName(event.currentTarget.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.currentTarget.value);
    };

    useEffect(() => {
        if (name.length > 0 && password.length > 0) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, password]);

    const handleSubmit = (event) => {
        onSubmit({ name, password });
        // onSubmit(event);
    };

    const arr = [1,2,3,45,5];
    // console.log('Array.from', Array.from(arr, (e) => e = 3));

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    id="username-input"
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                />
                <input
                    id="password-input"
                    type="password"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <button id="login-button" type="submit" disabled={isDisabled}>
                    Submit
                </button>
            </form>

            <MyForm/>
            <Codility/>
        </div>
    );
}
