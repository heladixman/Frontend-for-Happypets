import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {NotFound, Homepage, PetPage, Marketplace, Articles, MarketplaceDetail, AboutUs, ContactUs, Login, Navbar, FooterDefault} from './pages'

function App() {
  return (
    <div className="App">
      <div className='border-b-2 border-gray-100 shadow-lg shadow-gray-100'>
        <Navbar/>
      </div>
      <div className='flex justify-between items-center mt-8 max-w-[1200px] mx-auto px-4'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={(<NotFound />)} />
          <Route path='/' element={(<Homepage />)} />
          <Route path='pets' element={(<PetPage />)} />
          <Route path='articles' element={(<Articles />)} />
          <Route path='about-us' element={(<AboutUs />)} />
          <Route path='contact-us' element={(<ContactUs />)} />
          <Route path='marketplace' element={(<Marketplace />)}/>
          <Route path='marketplace/:productURL' element={(<MarketplaceDetail />)}/>
          <Route path='login' element={(<Login />)}/>
        </Routes>
      </BrowserRouter>
      </div>
      <div>
        <FooterDefault/>
      </div>
    </div>
  );
}

export default App;
