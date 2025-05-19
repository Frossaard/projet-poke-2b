import poke from "./assets/image.png"
import eevee from './assets/eevee.jpg'
import './Home.css'
 
const Home = () => {
    return (
        <div className="pokeflex">
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
             <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
        </div>
    )
}
 
export default Home