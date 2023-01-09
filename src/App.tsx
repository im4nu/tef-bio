import Card from './components/card'
import arrowDown from './assets/icons/arrowDown.svg'
import { motion } from "framer-motion"

function App() {
  return (
    <main className='flex flex-col w-screen h-screen'>
      <div className="flex flex-col">
        <Card />
        <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
      </ul>

      </div>

      <div className="fixed bottom-0 ArrowDown">
        <img src={arrowDown} alt="Seta para baixo" />
      </div>
    </main>
  )
}

export default App
