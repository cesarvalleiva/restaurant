import { useEffect, useState } from 'react';
import axios from 'axios'
import './Creacion.css'
import Loading from '../Loading/Loading';

const Creacion = () => {
    const [seleccionados, setSeleccionados] = useState([]);
    const [total, setTotal] = useState(350)
    const [info, setInfo] = useState([])

    const obtenerInfo = async () => {
        const response = await axios.get(`https://apipdtc.herokuapp.com/bulldog/ingredientes`)
        setInfo(response.data)
    }

    const seleccionar = ingrediente => {
        setSeleccionados([...seleccionados, ingrediente])
    }

    const sumarTotal = () => {
        let total = 350;
        seleccionados.map(selec => (
            setTotal(total += selec.precio)
        ))
    }

    const eliminarIngrediente = id => {
        setTotal(350)
        setSeleccionados(seleccionados.filter(selec => selec.id !== id))
    }

    useEffect(() => {
        obtenerInfo()
    }, [])

    useEffect(() => {
        sumarTotal()
    }, [seleccionados])

    return (
        <>
            { info.length > 0 ?
                <div className='contenedorIngredientes'>
                    <div className='container'>
                        <h2>Armá la tuya!</h2>   
                        <div className='contenedorGeneral'>
                            <div className='ingredientes'>
                                {info.map(ingrediente => (
                                    <button className={seleccionados.find(ingre => ingre.id === ingrediente.id) ? 'btn btn-warning ingredienteSeleccionado' : 'btn btn-outline-warning ingrediente'} key={ingrediente.id} onClick={() => seleccionar({...ingrediente})} disabled={seleccionados.find(ingre => ingre.id === ingrediente.id) ? true : false}>
                                        <img src={require(`../../assets/img/ingredientes/${ingrediente.imagen}.png`)} alt={ingrediente.nombre} />
                                        <div className='infoIngrediente'>
                                            <p>{ingrediente.nombre}</p>
                                            <p className='me-3'>{}${ingrediente.precio}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className='precioArmado'>
                                {total !== 350 ? 
                                    <>
                                        <h3>Tu pedido 🗒</h3>
                                        <div className='apagar'>
                                            <div className='apagarImagenNombre'>
                                                <img src={require("../../assets/img/ingredientes/Carne.png")} alt="Carne" width={50} />
                                                <p>Carne</p>
                                            </div>
                                            <p>$350</p>
                                        </div>
                                        {seleccionados.map(selec => (
                                            <div key={selec.id} className='d-flex'>
                                                <div className='apagar'>
                                                    <div className='apagarImagenNombre'>
                                                        <img src={require(`../../assets/img/ingredientes/${selec.imagen}.png`)} alt={selec.nombre} width={50} />
                                                        <p>{selec.nombre} </p>
                                                    </div>
                                                    <div className="precioYeliminarIngrediente">
                                                        <p>${selec.precio}</p>
                                                        <i className="bi bi-trash text-danger" onClick={()=>eliminarIngrediente(selec.id)}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                
                                
                                        <h2 className='precioTotal'>Total: ${total}</h2>
                                        <div className='total'>
                                            <div className='w-100 mt-3'>
                                                <div className="d-grid gap-2">
                                                    <button className='btn btn-warning realizarPedido' >Confirmar pedido</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                :
                                    <h4 className='text-center emepezaSeleccion'>Empezá a seleccionar!  🍔🍟</h4>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            :
                <Loading />
            }
        </>
     );
}
 
export default Creacion;