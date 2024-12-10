import { useNavigate } from "react-router-dom"
import css from "./Tutors.module.css"
import girl from "../../assets/girl.svg"
import mac from "../../assets/Mac.svg"

export default function Tutors() {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/teachers')
    }
    return(
        <div className={css.container}>
            <ul className={css.item}>
                <li>
                    <h1 className={css.title}>Unlock your potential with the best  <span className={css.span}>language</span> tutors</h1>
                    <p className={css.description}>Embark on an Exciting Language Journey with Expert Language <span>Tutors: Elevate your language proficiency to new heights by</span> connecting with highly qualified and experienced tutors.</p>
                    <button className={css.button} type="submit" onClick={handleClick}>Get started</button>
                </li>
            </ul>
            <ul className={css.itemSvg}>
                <li>
                    <img src={girl} alt="girl" />
                </li>
                <li className={css.mac}>
                    <img  src={mac} alt="mac" />
                </li>
            </ul>
        </div>
    )
}