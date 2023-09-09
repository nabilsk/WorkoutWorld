import { useState} from 'react'
import NavBar from '@/scenes/navbar'


function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  return (
   <div className='app bg-gray-50'>
    <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   </div>
  )
}

export default App
