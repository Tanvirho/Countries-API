import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { Main } from "./components/main"
import { CountryDetail } from "./components/CountryDetail"
import {  ThemeProvider } from "./Contexts/ThemeContext"
import { NotFound } from "./components/NotFound"



function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:country" element={<CountryDetail />} />
            <Route path="/error" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
