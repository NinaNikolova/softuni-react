import './Home.module.css'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



import UncontrolledExample, { Slider } from './Slider/Slider';
export const Home = ({
  stories
}) => {
  return (

    <section id="home">
      <h1>Кратки разкази "У нас и по света с деца"</h1>

      <UncontrolledExample stories={stories}/>

      <p>Здравейте! Това е сайт за идеи за разходки и приключения на семейства с деца сред природата, на планина, по забележителности и море из България и по света.</p>

      <p> Ще се радваме да споделите накратко Вашето преживяване!</p>
      <p>И тъй като обикновено всички сме заети, моля, разкажете най-важното и интересно накратко! <i style={{ fontSize: '40px', color: 'orange' }} className="fa-regular fa-face-laugh-wink"></i></p>
      <p> Ще се радваме да се заредите тук с идеи за нови пътешествия, разходки и приключения!</p>

      <div>
        <Button className="landing-text" href="/create" variant="outline-success">Добави своя разказ и снимка</Button>{' '}
      
        <Button className="landing-text" href="/catalog" variant="outline-success">Разгледай други разкази...</Button>{' '}
      </div>
    </section>
  )
}