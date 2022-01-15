import Jamon from '../../assets/img/jamon.png';
import Lechuga from '../../assets/img/lechuga.png';
import Tomate from '../../assets/img/tomate.png';
import Queso from '../../assets/img/queso.png';
import Panceta from '../../assets/img/panceta.png';
import Papas from '../../assets/img/papas.png';
import Carne from '../../assets/img/carne.png';
import './Creacion.css'
import { useEffect, useState } from 'react';

const Creacion = () => {
    const [seleccionados, setSeleccionados] = useState([]);
    const [total, setTotal] = useState(0)

    let info = [
        {
            id: 1,
            nombre: "Jamón",
            imagen: Jamon,
            precio: 10
        },
        {
            id: 2,
            nombre: "Lechuga",
            imagen: Lechuga,
            precio: 20
        },
        {
            id: 3,
            nombre: "Tomate",
            imagen: Tomate,
            precio: 30
        },
        {
            id: 4,
            nombre: "Queso",
            imagen: Queso,
            precio: 40
        },
        {
            id: 5,
            nombre: "Panceta",
            imagen: Panceta,
            precio: 50
        },
        {
            id: 6,
            nombre: "Papas",
            imagen: Papas,
            precio: 60
        }
    ]

    const seleccionar = ingrediente => {
        setSeleccionados([...seleccionados, ingrediente])
    }

    const sumarTotal = () => {
        let total = 150;
        seleccionados.map(selec => (
            setTotal(total += selec.precio)
        ))
    }

    useEffect(() => {
        sumarTotal()
    }, [seleccionados])

    return (
        <div className='contenedorIngredientes'>
            <div className='container'>
                <h2>Armá la tuya! 🍔</h2>   
                <div className='contenedorGeneral'>
                    <div className='ingredientes'>
                        {info.map(ingrediente => (
                            <div className={seleccionados.find(ingre => ingre.id === ingrediente.id) ? 'ingredienteSeleccionado' : 'ingrediente'} key={ingrediente.id} onClick={() => seleccionar({...ingrediente})}>
                                <img src={ingrediente.imagen} alt={ingrediente.nombre} />
                                <div className='infoIngrediente'>
                                    <p>{ingrediente.nombre}</p>
                                    <p className='me-3'>{}${ingrediente.precio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='precioArmado'>
                        <div className='apagar'>
                            <div className='apagarImagenNombre'>
                                <img src={Carne} alt="Carne" width={50} />
                                <p>Carne</p>
                            </div>
                            <p>$150</p>
                        </div>
                        {seleccionados.map(selec => (
                            <div key={selec.id} className='d-flex'>
                                <div className='apagar'>
                                    <div className='apagarImagenNombre'>
                                        <img src={selec.imagen} alt={selec.nombre} width={50} />
                                        <p>{selec.nombre} </p>
                                    </div>
                                    <p>${selec.precio}</p>
                                </div>
                            </div>
                        ))}
                        <div className='total'>Total = ${total}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Creacion;