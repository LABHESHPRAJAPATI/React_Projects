import React, { useContext } from "react";
import userContext from "../context/usercontext";
import { useState } from "react";

function Login() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const { setuser } = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({ username, password })

    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="username" />
            <input type="text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="password" />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login
