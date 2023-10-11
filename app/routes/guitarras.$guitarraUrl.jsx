import { useState } from "react"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getGuitarra } from "../models/guitarras.server"

export function meta({data}) {
    if(!data) {
        return [
            {
                title: `GuitarLA - Guitarra No Encontrada`,
                description: `Venta de guitarras, guitarra no encontrada`
            }
        ]
    }
    return [
        {
            title: `GuitarLA - ${data.data[0].attributes.nombre}`,
            description: `Venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
        }
    ]
}

export async function loader({params}) {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)
    //Si no se encuentra la guitarra lanzamos un error
    if(guitarra.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }
    return guitarra
}

function Guitarra() {
    const { agregarCarrito } = useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1) {
            alert("Debes seleccionar una cantidad")
            return
        }

        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
    }
    return (
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">{precio}</p>

                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>
                    <select onChange={e => setCantidad(parseInt(+e.target.value))} id="cantidad">
                        <option value="0">-- Seleccione cantidad --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Agregar al carro"/>
                </form>
            </div>
        </div>
    )
}

export default Guitarra