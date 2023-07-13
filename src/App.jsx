import { styled } from "styled-components"
import { Routes, Route, Link } from "react-router-dom"
import Menu from './components/Menu'
import Target from "./components/target.jsx"
import Nav from "./components/nav.jsx"
import Noticia from "./components/noticia.jsx"
import Opciones from "./components/opciones.jsx"

const Div = styled.div`
  display: flex;
  witdh: 100%;
`
const H1 = styled.h1`
  font-size: 30px;
  padding: 10px;
`
const Section = styled.section`
  width:85%;
  background-color:#fff;
  padding: 10px;
  border-left: 2px solid black;
`


const Inicio = () =>{
  return(
    <div>
        <H1>Inicio</H1>
        <h3>Noticia:</h3>
        <Noticia/>
    </div>
  )
}


function App() {
  return (
    <div>
      <Nav/>
      <Div>
      <Menu/>
      <Section>
        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/opciones" element={<Opciones/>}/>
        </Routes>
      </Section>
      </Div>
    </div>  
  )
}

export default App
