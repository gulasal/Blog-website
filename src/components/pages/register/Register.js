import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..."></input>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..."></input>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..."></input>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}
