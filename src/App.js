import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NotFound, Homepage, PetPage, Marketplace, Articles, MarketplaceDetail, AboutUs, ContactUs, Login, Navbar, FooterDefault, Heroku, Cart, SingleProduct, Register, Profile} from './pages'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div className='mt-24 max-w-[1200px] mx-auto px-4'>
      <Router>
        <Routes>
          <Route path='*' element={(<NotFound />)} />
          <Route path='/' element={(<Homepage />)} />
          <Route path='pets' element={(<PetPage />)} />
          <Route path='profile' element={(<Profile />)} />
          <Route path='articles' element={(<Articles />)} />
          <Route path='about-us' element={(<AboutUs />)} />
          <Route path='contact-us' element={(<ContactUs />)} />
          <Route path='marketplace' element={(<Marketplace />)}/>
          <Route path='marketplace/:id' element={(<MarketplaceDetail />)}/>
          <Route path='marketplace/product/:id' element={(<SingleProduct />)}/>
          <Route path='sign-in' element={(<Login />)}/>
          <Route path='sign-up' element={(<Register />)}/>
        </Routes>
      </Router>
      </div>
      <div className='relative h-36'>
        <FooterDefault/>
      </div>
    </div>
  );
}

export default App;
