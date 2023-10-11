import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
    return [
        {
            title: 'GuitarLA - Nosotros',
            description: 'Venta de guitarras, blog de música'
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="sobre nosotros"/>
                <div >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, necessitatibus voluptatibus quos quam, ab architecto est non atque cum veniam sequi? Rem in iure atque, expedita ut explicabo nulla! Quia!.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sint sapiente ea explicabo nostrum consectetur saepe sunt facilis dolore illum quaerat, aperiam odit quibusdam? Libero sed dignissimos animi laboriosam ab.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros
