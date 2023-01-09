import stick from './assets/icons/stick.svg'
import Card from './components/card'

function App() {
  return (
    <main className='flex flex-col w-screen h-screen'>
      <div className="flex flex-col">
        <Card />
      </div>

      <div className="area" >
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
      </div >
    </main>
  )
}

export default App
