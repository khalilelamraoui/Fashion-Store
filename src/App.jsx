
import './App.css';
import Header from './components/Header'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="container-fluid container-lg">
        <Header />
        <Main />
      </div>
      <div className="footer1 p-2 text-light text-center mt-2 mt-sm-5 d-flex justify-content-center bg-primary-2">
        <span className="text-center ft1">
          • SUBSCRIBE AND GET A DISCOUNT 
        </span>
        <span className="text-center ft-2">
          • SUBSCRIBE AND GET A DISCOUNT 
        </span>
      </div>
    </div>
  );
}

export default App;
