import { useState, useEffect } from 'react'
import axios from 'axios'
import './Buscadas.css'
import Loading from '../Loading/Loading'

const Buscadas = () => {
    const [info, setInfo] = useState([])

    const obtenerInfo = async () => {
        const response = await axios.get(`https://apipdtc.herokuapp.com/bulldog/buscadas`)
        setInfo(response.data)
    }

    useEffect(() => {
        obtenerInfo()
    }, [])

    return ( 
        <>
            {info.length > 0 ?
                <div className='containerOpciones'>
                    <h2>Las más buscadas</h2>
                    <div className='container contenedorOpciones'>
                        {info.map(buscada => (
                            <div key={buscada.id} className="card shadow buscadas">
                                <img src={require(`../../assets/img/${buscada.imagen}.png`)} className="card-img-top imgOpciones" alt={buscada.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title h5Buscadas ">{buscada.nombre}</h5>
                                    <div className="card-text">{buscada.ingredientes?.map((ingre, idx) => (<p className='m-0' key={idx}>{`- ${ingre}`}</p>))}</div>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <p className="precio">${buscada.precio}</p>
                                        <a href="#" className="btn btn-warning">Ordenar</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            :
                <Loading />
            }
        </>
     );
}
 
export default Buscadas;