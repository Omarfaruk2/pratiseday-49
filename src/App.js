// tshart.json

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Eror from './components/Eror/Eror'
import Grandpa from './components/Grandpa/Grandpa'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import OrderReview from './components/OrderReview/OrderReview'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='home' element={<Home></Home>} ></Route>
        <Route path='orderreview' element={<OrderReview></OrderReview>} ></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>} ></Route>
        <Route path='*' element={<Eror></Eror>} ></Route>
      </Routes>
    </div>
  )
}

export default App
