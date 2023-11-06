import { BrowserRouter } from 'react-router-dom'
import { HomeLayout } from './layouts/home/HomeLayout'
import Router from './routes/Router'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
