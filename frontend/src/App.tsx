import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Chat from './pages/Chat'



function App() {

  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Chat />} />
          {/* <Route element={<MainLayout />}>
          </Route> */}
        </Routes>
      </div >
    </>
  )
}

export default App