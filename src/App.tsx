import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Frontpage } from './components/Frontpage'
import { News } from './components/News'
import './App.css'

function App() {


  return (
    <div className='h-full bg-white w-full  flex flex-col items-center '>
      <Header />
      <Navbar />
      <Frontpage />
      <News />
    </div>
  )
}

export default App
