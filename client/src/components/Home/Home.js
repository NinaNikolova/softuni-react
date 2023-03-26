import './Home.module.css'
import{NavLink} from 'react-router-dom';


import { Slider } from './Slider/Slider';
export const Home =()=>{
    return(

        <section id="home">
        <h1>Кратки разкази "У нас и по света с деца"</h1>
   
        <Slider /> 
 
        <p>Здравейте! Това е сайт за идеи за разходки и приключения на семейства с деца сред природата, на планина, по забележителности и море из България и по света.</p>
     
        <p> Ще се радваме да споделите накратко Вашето преживяване!</p>
        <p>И тъй като обикновено всички сме заети, моля, разкажете най-важното и интересно накратко! <i style={{fontSize:'40px', color:'orange'}} className="fa-regular fa-face-laugh-wink"></i></p>
        <p> Ще се радваме да се заредите тук с идеи за нови пътешествия, разходки и приключения!</p>
        

        <h2 id="landing-text"><span><NavLink style={({isActive})=>({background: isActive ? '#dddd95': 'green'})} to="/create">Добави своя разказ и снимка</NavLink></span> <strong>||</strong> <span> <NavLink  style={({isActive})=>({background: isActive ? '#dddd95': 'green'})} to="/catalog">Разгледай разказите на други автори!</NavLink></span></h2>
      </section>
    )
}