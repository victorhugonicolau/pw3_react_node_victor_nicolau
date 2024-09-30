import { useState } from 'react'
import banner from "/banner_home.png"
import style from './CreatePost.module.css'

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [body, setBody] = useState();
  const [tags, setTags] = useState();
  const [formError, setFormError] = useState();
    return (
        <>
        <div>
          <h1>
            Suas novas things né
            <img src={banner} alt="image feia eca!!" />
          </h1>
        </div>
        </>
  )
}
 
export default CreatePost

/*const CreatePost = () => {
    const [nome, setNome] = useState('**')
    const [email, setEmail] = useState('**')
    const handleNome = (event) =>{
      //event.preventDefault()
      setNome(event.target.value)
    }
    const handleEmail = (event) =>{
      //event.preventDefault()
      setEmail(event.target.value)
    }
    const handleSubmit = (event) =>{
      event.preventDefault()
      alert(`Formulário enviado ${nome} e ${email} `)
    }    
    return (
    <div>
      <div>
      <h2>Seu nominho é: <input type="text" value={nome} readOnly/></h2>
      <h4>E-mail <input type="text" value={email}readOnly/></h4>
      </div>
       <form>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="nome" placeholder="Entre com nome" onChange={handleNome}/>
        </div>
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Entre com seu e-mail" onChange={handleEmail}/>
        </div>
        <div>
            <input type="submit" value="Enviar" onClick={handleSubmit}/>
        </div>
       </form>
    </div>
  )
}
 
export default CreatePost*/