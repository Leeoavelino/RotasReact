import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home' //importando o home
import { About } from './components/About' //importando about 
import { Menu } from './components/Menu'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'
import { Post } from './components/Post'

import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Home /> */}

    {/* quando for usar qualquer coisa do react-router-dom, aquela coisa tem que estar dentro do BrowserRouter */}
    <BrowserRouter>

      <Menu/>

      {/* Onde colocamos cada rota */}
      <Routes> 
        {/* na barra ele renderiza a rota Home */}
        <Route path='/' element={<Home/>}/> 
        {/* nessa rota about ele renderiza tudo que esta em about */}
        <Route path='/about' element={<About/>}/>

        <Route path='/posts' element={<Posts/>}/>
        {/* é uma rota mais espeficica pois ela busca um parametro */}
        {/* <Route path='/posts/:id' element={<Posts/>}/> */}

        <Route path='/posts' element={<Posts/>}>

          <Route path=':id' element={ <Post/>} />


        </Route>

        <Route path='/redirect' element={<Redirect/>}/>
        {/* para colocar em uma pagina que nao foi encontrada. * é uma rota que captura tudo e colocamos o NotFound como caminho. voce vai passar uam rota e o sistema vai testar todas as rotas. nao achando a rota ele usa a rota NotFound.*/}
        <Route path='*' element={<NotFound/>}/>
        

      </Routes>
    
    </BrowserRouter>


  </React.StrictMode>,
)
