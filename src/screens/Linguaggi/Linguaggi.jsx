import "./Linguaggi.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons';

import { techs } from "./techs";

const Linguaggi = () => {
    const listaLinguaggi = techs.map((linguaggio,i)=>{
        return(
            <div className="tech-frames background-animation" key={i}>
                <img src={linguaggio.image} alt={linguaggio.name}/>
                <h3>{linguaggio.name}</h3>
            </div>
        )
    })
  return (
    <div id="Linguaggi" className="linguaggi-container">
        <h1> Alcuni dei linguaggi che utilizzo <FontAwesomeIcon icon={faLaptopCode} /> </h1>
        <div className="tech-grid-container">
        {listaLinguaggi}
        </div>
    </div>
  )
}

export default Linguaggi