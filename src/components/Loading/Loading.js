import './Loading.css'

const Loading = () => {
    return ( 
        <div className='loading'>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className='text-warning mt-3'>Cargando...</p>
        </div>
     );
}
 
export default Loading;