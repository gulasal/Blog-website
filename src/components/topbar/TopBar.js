import { Link } from "react-router-dom";
import "./topbar.css"


export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div> 
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div> 
            <div className="topRight">
            {
                user ?(
                    <img className="topImage"
                src="https://i.pinimg.com/474x/2f/32/d5/2f32d53a91471cb688c9c36aed56e168.jpg" 
                alt="myImage"></img>
                ):(
                    <ul className="topList">
                        <li>
                            <Link to="/login" className="link">
                            LOGIN
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="link">
                            REGISTER
                            </Link>
                        </li>
                        
                    </ul>
                )
            }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>    
        </div>
    )
}
