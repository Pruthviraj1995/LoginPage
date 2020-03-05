import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        if (!email) {
            e.preventDefault();
            alert("Email is Required");
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            e.preventDefault();
            alert("Enter Valid Email");
            return;
        }

        if (!password) {
            e.preventDefault();
            alert("Password is Required");
            return;
        }

        if (!(password.length > 7)) {
            e.preventDefault();
            alert("Password should be more than or equal to 8 characters ");
            return;
        }

        if (!(password.match("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"))) {
            e.preventDefault();
            alert("Password should include one number, capital & small letters ");
            return;
        }

        e.preventDefault();
        setEmail('');
        setPassword('');
    }

    return (
        <div className="loginpage">
            <div className='header'>InSightJedi</div>
            <form onSubmit={handleSubmit} className="loginform">
                <div className="title">Login Page</div>
                <div className="inputs">
                    <div>
                        <div className="textlabel">Email Id:</div>
                        <input autoFocus type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Ex: Michael@gmail.com"/>
                    </div>
                    <div>
                        <div className="textlabel">Password:</div>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Ex: MichaelAJ@99"/>
                    </div>
                    <button type='submit'>
                        Submit
                </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;