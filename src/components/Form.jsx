import React, {useState} from 'react'

function Form({event}) {
  const [form,setForm] = useState({});

  const handleChage = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }

  const CheackOut = (e)=>{
    e.preventDefault();
    event(form);
  }

  return (
    <form className='formUser'>
      <h3>Datos del Comprador</h3>
      <label>Nombre</label>
      <input type="text" name='nombre' placeholder='Ingrese su Nombre' required onChange={handleChage} />
      <label>Mail</label>
      <input type="mail" name='mail' required placeholder='Ingrese su Mail' onChange={handleChage}/>
      <label>Numero de Telefono</label>
      <input type="number" name='number' required placeholder='Ingrese su numero' onChange={handleChage} />
      <input type="submit" name="" id="" value="Cheack Out" onClick={CheackOut}/>
      <input type="reset" />
      
    </form>
  )
}

export default Form