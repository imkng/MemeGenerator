import React from "react"
import img1 from "./TrollFace.jpg"
import './style.css'

class Header extends React.Component{
    render(){
        return(
            <header>
            <img src = {img1}/>
            <p>Meme Generator</p>
            </header>

        )
    }
}
export default Header