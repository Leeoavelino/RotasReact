import './style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return(
     <>
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about"  state={'This is state from ABOUT'}>About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/posts/10">Posts 10</Link>
                </li>
                <li>
                    <Link to="/redirect">Redirect</Link>
                </li>
            </ul>
        </nav>

    </>
    )
}

// link seria a mesma coisa de usar o a so que usando o link a pagina nao atualiza, so usa a rota para mudar o que sera mostrado

// o to seria a mesma coisa que o href