import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
                className="writeImg"  alt=""
                src="https://www.lavacacoworking.com/wp-content/uploads/2018/02/La_Vaca_Coworking_Barcelona_Blog_Sharing_Ideas-1440x534.jpg">

            </img>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}></input>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </div>
    )
}
