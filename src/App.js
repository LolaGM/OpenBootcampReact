import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio GREETING.jsx que pintamos llamándolo por el nombre de la clase que va en mayúscula: GREETING y lo importamos arriba con la ruta del jsx que está en minúscula*/}
        <Greeting name="Lola" />
        {/*Con esto creamos una instancia de nuestra clase Greeting y con ello sus constructores y demás ciclos de vida,etc*/
        /*Aquí en el padre APP en el componente le hemos pasado el valor que ha pasado a su hijo Greeting por la propiedad privada nombre gracias a los PROPS que tiene el hijo y que hace la llamada*/}
      </header>
    </div>
  );
}

export default App;
