import React, { useState } from 'react'
import Carrera from './Carrera';
const FormCarreras = () => {    
    const [valor,setValor] = useState(0)
    const [index,setIndex] = useState(-1)
    const [error,setError] = useState('')
    const [carreras, setCarreras] = useState([
      {
        id:1,
        value: "database",
        nombre:'Base de Datos',
        cantidadAlumnos:0,
        listaNotas: [],
        activa:true
      },
      {
        id:2,
        value: "frontend",
        nombre:'Desarrollo Frontend',
        cantidadAlumnos:0,
        listaNotas: [],
        activa:true
      },
      {
        id:3,
        value: "backend",
        nombre:'Desarrollo Backend',
        cantidadAlumnos:0,
        listaNotas: [],
        activa:true
      },
      {
        id:4,
        value: "devops",
        nombre:'Devops',
        cantidadAlumnos:0,
        listaNotas: [],
        activa:false
      }
    ])

    const handleSubmit = (event) => {
      event.preventDefault()         
      if (index != -1) {    
        carreras[index].cantidadAlumnos ++
        carreras[index].listaNotas.push(valor)
        setCarreras([...carreras])        
      }else setError('Seleccione una Carrera !!!')
    }

    const handleChange = (event) => {
      event.preventDefault()                        
      const findIndex= carreras.findIndex(carrera => carrera.value == event.target.value)
      setIndex(findIndex)            
      setError('')            
      if (!carreras[findIndex].activa) {
       setError('Carrera no Activa para Ingresar Nota !!!')
      }
    }

  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select onChange={handleChange}>
            <option selected disabled>
              Selecione una carrera
            </option>
            {
              carreras.map(carrera => <option key = {carrera.id} value={carrera.value}>{carrera.nombre}</option> )
            }
          </select>
          <input type="number" step="0.01" min='0' max='10' defaultValue='0' onChange={(event) => setValor(parseFloat(event.target.value))} required/>
        </div>
        {error.length > 0 && error}
        <input type="submit" value="Salvar" disabled={error.length > 0}/>
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Carrera</th>
              <th>Cantidad de Estudiantes</th>
              <th>Promedio de Calificaciones de los Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            {
              carreras.filter(carrera => carrera.activa).map(carrera => <Carrera key={carrera.id} carrera={carrera}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FormCarreras