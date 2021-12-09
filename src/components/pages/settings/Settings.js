import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                   <span className="settingsUpdateTitle">Update Your Account</span>
                   <span className="settingsDeleteTitle">Delete Your Account</span> 
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="settingsImg" 
                        src="https://miro.medium.com/max/2000/1*1mLboEEMIdHjHJbI8_Z7Hg.jpeg"
                        alt=""/>
                        <label>

                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Any name"></input>
                    <label>Email</label>
                    <input type="email" placeholder="aaaabbbb@gmail.com"></input>
                    <label>Password</label>
                    <input type="password" ></input>
                    <button className="settingsSubmit">Update</button>
                </form>

            </div>
            <Sidebar />
        </div>
    )
}
