import Header from "./components/Header"
import Carousel from "./components/Carousel"
import Featured from "./components/Featured"
import TopSelling from "./components/TopSelling"
import Footer from "./components/Footer"
import Allproducts from "./components/pages/Allproducts"
import Detail from "./components/pages/Detail"
import Cart from "./components/pages/Cart"
import {EcomProvider} from "./context/EcomContext"
import Alert from "./components/Alert"
import ThankYou from "./components/pages/ThankYou"
import Checkout from "./components/pages/Checkout"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const {getItem} = useLocalStorage("auth-token")
  const token = getItem()
  let authInitialState = {accessToken: token ?? null}
  return (
    <AuthProvider defaultState={authInitialState}>
      <EcomProvider>
    <Router>
      <Header />
      <Alert />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel/>
            <Featured/>
            <TopSelling/>
          </>
        } />
        <Route path="/products" element={<Allproducts />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path ="/cart" element={<Cart />}/>
        <Route path ="/checkout" element={<Checkout/>}/>
        <Route path ="/register" element={<Register/>}/>
       <Route path = "/Login" element={<Login/>}/>
       <Route path = "/thankyou" element={<ThankYou/>}/>
      </Routes>
      <Footer/>
   </Router>
   </EcomProvider>
    </AuthProvider>
   
  )
}

export default App