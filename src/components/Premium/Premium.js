import { useContext, useEffect } from 'react';
import { Context } from '../../store/burgerContext';
import './Premium.css'

const Premium = () => {
    const {info, obtenerInfo} = useContext(Context);

    useEffect(() => {
        obtenerInfo('premium')
    }, [])
    
    return ( 
        <div className='contenedorTotalPremium'>
            <h2 className='tituloPremium'>Las Premium</h2>
            <div className='container contenedorPremium'>
                {info.map(premium => (
                    <div className="card hamburguesaPremium shadow">
                        <div className="row g-0" key={premium.id}>
                            <div className="col-md-5 contenedorImagenPremium">
                                <img src="https://okdiario.com/img/2021/03/06/4-hamburguesas-gourmet.jpg" className="img-fluid rounded-start" alt={premium.nombre} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{premium.nombre}</h5>
                                    <div className="card-text d-flex ingredientesPremium">{premium.ingredientes.map((ingre, idx) => (<p className='m-0 mb-3' key={idx}>{`${ingre}. `}</p>))}</div>
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
     );
}
 
export default Premium;