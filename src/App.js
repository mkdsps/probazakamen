import { Route,Routes } from "react-router-dom"
import Pocetna from "./Pocetna"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Pocetna/>}/>
    </Routes>
    )
}
