import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);
  
       const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.values(values).some(x=>x==='')){
            return alert("Моля, попълнете всички полета!")
        }
        

         onSubmitHandler(values)
          setValues(initialValues)

       
    }
    return {
        values,
        changeHandler,
        onSubmit
    }
}