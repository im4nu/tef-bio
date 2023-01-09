import stick from './assets/icons/stick.svg'
import Card from './components/card'

function App() {
  return (
    <main className='flex flex-col w-screen h-screen'>
      <div className="flex flex-col gap-7">
        <Card />
      </div>

      <div className="flex flex-col h-full justify-end items-center text-center">
        <p className='pb-10 text-sm'>Selecione um dos <span>contatos</span> acima</p>
      </div>

      <div className="fixed footerStick">
        <img src={stick} alt="Tracejado no fim da página" />
      </div>
    </main>
  )
}

export default App
