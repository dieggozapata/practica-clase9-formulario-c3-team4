import React from 'react'
const Carrera = ({carrera}) => {        
    const sumatoria = carrera.listaNotas.length > 0 && carrera.listaNotas.reduce(function(result,item) {
        return result + item
    })
    const promedio = sumatoria == 0 ? 0 : sumatoria / carrera.cantidadAlumnos
  return (
    <tr>
        <td>{carrera.nombre}</td>
        <td>{carrera.cantidadAlumnos}</td>
        <td>{promedio}</td>
    </tr>
  )
}

export default Carrera