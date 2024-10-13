// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home'; 
// import Food from './Food'; 
// import Restaurant from './Restaurant'; 
// import Quote from './Quote'; 
// import Contact from './Contact'; 
// import Header from './Header';  
// import Footer from './Footer'; 

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <h1>Geek Food</h1>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/quote" element={<Quote />} />
//           <Route path="/food" element={<Food />} />
//           <Route path="/restaurant" element={<Restaurant/>} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './Home'; 
import Food from './Food'; 
import Restaurant from './Restaurant'; 
import Quote from './Quote'; 
import Contact from './Contact'; 
import Header from './Header';  
import Footer from './Footer'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <h1>Geek Food</h1>
        <nav>
          <ul className="flex space-x-4 p-4 bg-gray-200">
            <li>
              <Link to="/home" className="text-blue-600 font-semibold">Home</Link>
            </li>
            <li>
              <Link to="/quote" className="text-blue-600 font-semibold">Quote</Link>
            </li>
            <li>
              <Link to="/food" className="text-blue-600 font-semibold">Food</Link>
            </li>
            <li>
              <Link to="/restaurant" className="text-blue-600 font-semibold">Restaurant</Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-600 font-semibold">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/food" element={<Food />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;





