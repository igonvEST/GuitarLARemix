import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import ListadoGuitarras from "../components/listado-guitarras"

export function meta() {
    return [
        {
            title: 'GuitarLA - Tienda',
            description: 'Venta de guitarras, Nuestra Colección'
        }
    ]
}

export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}

function Tienda() {
    const guitarras = useLoaderData()
    return (
        <ListadoGuitarras
            guitarras={guitarras}
        />
    )
}

export default Tienda