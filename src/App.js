// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';
// import Primero from './componentes/primero';
// import segundo from './componentes/segundo';
import Tercero from './componentes/Tercero';

class App extends Component {
  
  datoNombre = (nombrep) =>{
    console.log(nombrep);
  }
  datoCantidad = (cantidadp) =>{
    console.log(cantidadp);
  }
  datoMarca = (marcap) =>{
    console.log(marcap);
  }
  
  
  render(){
    return (
      <div className="app container">
          <div className="jumbotron">
          <h6 className="lead text-center"> Bienvenido</h6>
            <h6 className="lead text-center"> Seleccione los productos que desea agregar a la tienda </h6>
          
          
            <div >
              <Tercero
                datoNombre={this.datoNombre}
              />
              
            </div>
            
          </div>
           

      </div>
          
        
      // </div>
      
    );
  }
}

export default App;
