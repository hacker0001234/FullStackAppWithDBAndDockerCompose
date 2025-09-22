import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import Contacts from "./pages/Contacts.jsx";
import PaymentAndDelivery from "./pages/PaymentAndDelivery.jsx";
import Service from "./pages/Service.jsx";

function App() {

  return (
     <BrowserRouter>
         <Routes>
             <Route path={"/"} element={<MainPage/>} />
             <Route path={"/paymentAndDelivery"} element={<PaymentAndDelivery/>} />
             <Route path={"/service"} element={<Service/>}/>
             <Route path={"/contacts"} element={<Contacts/>} />
         </Routes>
     </BrowserRouter>
  )
}

export default App
