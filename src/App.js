import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NotFound, Homepage, PetPage, Marketplace, Articles, MarketplaceDetail, AboutUs, ContactUs, Login, Navbar, FooterDefault, Heroku} from './pages'

function App() {
  return (
    <div className="App">
      <div className='border-b-2 border-gray-100 shadow-lg shadow-gray-100 bg-gray-100'>
        <Navbar/>
        <Heroku/>
      </div>
      <div className='flex justify-between items-center mt-8 max-w-[1200px] mx-auto px-4'>
      <Router>
        <Routes>
          <Route path='*' element={(<NotFound />)} />
          <Route path='/' element={(<Homepage />)} />
          <Route path='pets' element={(<PetPage />)} />
          <Route path='articles' element={(<Articles />)} />
          <Route path='about-us' element={(<AboutUs />)} />
          <Route path='contact-us' element={(<ContactUs />)} />
          <Route path='marketplace' element={(<Marketplace />)}/>
          <Route path='marketplace/:id' element={(<MarketplaceDetail />)}/>
          <Route path='login' element={(<Login />)}/>
        </Routes>
      </Router>
      </div>
      <div>
        <FooterDefault/>
      </div>
    </div>
  );
}

export default App;
