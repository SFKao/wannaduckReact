import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Route, Routes} from 'react-router-dom';
import Error from './components/error/Error';
import ListaTodo from './components/listaTodo/ListaTodo';

function App() {
  return (
  <div>
  <Header/>
  <Routes>
    <Route exact path='/' element={<ListaTodo/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  <Footer/>
</div>
  );
}

export default App;
