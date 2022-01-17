import { useState, useEffect } from 'react';
import axios from 'axios';
import './Premium.css';
import Loading from '../Loading/Loading';

const Premium = () => {
    const [info, setInfo] = useState([])

    const obtenerInfo = async () => {
        const response = await axios.get(`https://apipdtc.herokuapp.com/bulldog/premium`)
        setInfo(response.data)
    }

    useEffect(() => {
        obtenerInfo()
    }, [])
    
    return ( 
        <>
            {info.length > 0 ?
                <div className='contenedorTotalPremium'>
                    <h2 className='tituloPremium'>Las Premium</h2>
                    <div className='container contenedorPremium'>
                        {info?.map(premium => (
                            <div className="card hamburguesaPremium shadow" key={premium.id}>
                                <div className="row g-0">
                                    <div className="col-md-5 contenedorImagenPremium">
                                        <img src={require(`../../assets/img/premium/${premium.imagen}.png`)} className="img-fluid rounded-start" alt={premium.nombre} />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">{premium.nombre}</h5>
                                            <div className="card-text ingredientesPremium">{premium.ingredientes?.map((ingre, idx) => (<div className='ingre' key={idx}>{ingre}.</div>))}</div>
                                            <div className='w-100 d-flex justify-content-between'>
                                                <p className="precio">${premium.precio}</p>
                                                <button className='btn btn-warning'>Ordenar</button>
                                            </div>
                                        </div>
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
 
export default Premium;