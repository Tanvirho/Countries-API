import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { Main } from "./components/main"
import { CountryDetail } from "./components/CountryDetail"



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/country-detail" element={ <CountryDetail /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
