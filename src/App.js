import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Sales from './Pages/Sales';
import Services from './Pages/Services';
import Parts from './Pages/Parts';
import Tsure from './Pages/Tsure';
import Faqs from './Pages/Faqs';
import Contactus from './Pages/Contactus';
import Customer from './Pages/Customer';
import Cars from './Page1/Cars';
import Suvs from './Page1/Suvs';
import Buses from './Page1/Buses';
import Gazoo from './Page1/Gazoo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            {/* Nested routes under Home */}
            <Route path="/" element={<Cars />} />
            <Route path="suvs" element={<Suvs />} />
            <Route path="buses" element={<Buses />} />
            <Route path="gazoo" element={<Gazoo />} />
          </Route>
          <Route path="/sales" element={<Sales />} />
          <Route path="/services" element={<Services />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/customerrelations" element={<Customer />} />
          <Route path="/tsure" element={<Tsure />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
