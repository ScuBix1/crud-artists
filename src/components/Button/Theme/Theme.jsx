import {ReactComponent as Sun} from '../../../assets/img/Sun.svg'
import {ReactComponent as Moon} from '../../../assets/img/Moon.svg'
import './Theme.css'
const Theme = () => {
    const setDarkMode = ()=>{
        document.body.setAttribute("class", "dark")
    }
    const setLightMode = ()=>{
        document.body.setAttribute("class", "light")
    }
    const toggleTheme = (e)=>{
        if(e.target.checked){
            setDarkMode()
        }else{
            setLightMode()
        }
    }
    return (
        <div className="theme-mode">
            <input className="theme-input" type="checkbox" id="theme-toggle" onChange={toggleTheme}/>
            <label className="theme-label" for="theme-toggle">
                <Sun />
                <Moon />
            </label>
        </div>
    )
}
export default Theme
