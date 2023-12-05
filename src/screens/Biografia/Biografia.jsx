import "./Biografia.css"
import neve from "./criCurriculum.jpg"
const Biografia = () => {
  return (
    <div id="aboutme" className="aboutme-container">
        <img src={neve} alt="foto mia"/>
        <div>
            <h1>About Me</h1>
            <p>Sono un appassionato di tecnologia e sviluppo web con una forte motivazione nel diventare un Front-End Developer.Ho una solida base di formazione ottenuta presso Aulab, combinata con uno studio intensivo del framework React come autodidatta. La mia dedizione alla tecnologia mi ha guidato nel padroneggiare linguaggi chiave come HTML, CSS e JavaScript, consentendomi di creare esperienze web coinvolgenti e funzionali.

Il mio percorso formativo è stato arricchito dall'apprendimento di competenze essenziali, tra cui responsive design, ottimizzazione delle prestazioni e user experience design. Sono in grado di tradurre le visioni dei clienti in soluzioni web personalizzate.

La mia missione è quella di contribuire a progetti innovativi nel mondo dello sviluppo web, portando un approccio creativo e tecnologicamente avanzato a ogni sfida. </p>
        </div>
    </div>
  )
}

export default Biografia