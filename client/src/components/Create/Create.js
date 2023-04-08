import './Animation.css';
import './Form.css'
import { useForm } from "../../hooks/useForm";
import { useStoryContext } from '../../contexts/StoryContext';


export const Create = () => {
  const { onCreateStorySubmit} =useStoryContext()
  const {values, changeHandler, onSubmit} = useForm({
    title: "",
    img: "",
    description: ""
  }, onCreateStorySubmit)
 
  return (
    <section id="create">
      <br />
       <div className="typewriter">
          <div className="slide"><i></i></div>
          <div className="paper"></div>
          <div className="keyboard"></div>
        </div>
     
       
      <div className="form">
         <h2>Създай твоя кратък разказ</h2>

        <form className="create-form" method="POST" onSubmit={onSubmit}>
          <input type="text" name="title"  placeholder="Заглавие" value={values.title} onChange={changeHandler} />
          <input type="text" name="img"  placeholder="Снимка с адрес: https://...jpg" value={values.img} onChange={changeHandler} />
          <textarea name="description" id="text" cols="100" rows="40" placeholder="Твоя кратък разказ" value={values.description} onChange={changeHandler} ></textarea>


          <button type="submit">Създай</button>
        </form>
      </div>

    </section>

  )
}