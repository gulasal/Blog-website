import "./header.css"

export default function Header() {
    return (
        <div className="header">
           <div className="headerTitles">
                <span className="headerTitleSm">React and Node</span>
                <span className="headerTitleLg">Blog</span>
           </div>
           <img 
           className="headerImage" 
           src="https://www.my-photos-gallery.com/media/gallery/large/5312-Nature-Grass-Flower-Blue-Plant.jpg"
           alt=""></img>
        </div>
    )
}
