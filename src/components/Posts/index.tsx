import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Posts = () => {

    const params = useParams()
    const {id} = params
    const [qs, setQs] = useSearchParams()
    
    return( 
     <>
        <h1>
            Leonardo Avelino dos Santos {`Params: ${id}`} {`queryString: ${qs}`} 
        </h1>

        <Outlet/>

    </>
    )
}