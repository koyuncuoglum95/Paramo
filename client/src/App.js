import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, MyCollection, NftDetails, NftMarketplace, Signup } from './pages';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/collection' element={<MyCollection />} />
          <Route path='/nft-details' element={<NftDetails />} />
          <Route path='/nft-marketplace' element={<NftMarketplace/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
