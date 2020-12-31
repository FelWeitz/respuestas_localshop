
import React,{Component} from 'react';
//import "./Tercero.css";
class Tercero extends Component{
   
   Agregar = React.createRef();
   Agregar2 = React.createRef();
   Agregar3 = React.createRef();
   handle =(e)=> {
        e.preventDefault();
        const nombrep = this.Agregar.current.value;
        
        console.log(this.Agregar.current.value);
        
        this.props.datoNombre(nombrep);
       
   }
    render() {
        return (
            <form onSubmit={this.handle}>
                {/* <div className="test "> */}
                    <div className="row">
                    <div className=" col-5">
                        <h5>ingrese el nombre del producto:</h5>
                    </div>
                    <div className="form-group col-7">
                        <input ref={this.Agregar} type="text" className="form-control
                        form-control-md" placeholder="Ingrese el nombre del producto"/>

                    </div>
                    <div className=" col-5">
                        <h5>ingrese la cantidad de producto:</h5>
                    </div>
                    <div className="form-group col-7">
                        <input ref={this.Agregar2} type="text" className="form-control
                        form-control-md" placeholder="Ingrese la cantidad de producto"/>

                    </div>
                    <div className=" col-5">
                        <h5>ingrese la marca del producto:</h5>
                    </div>
                    <div className="form-group col-7">
                        <input ref={this.Agregar3} type="text" className="form-control
                        form-control-md" placeholder="ingrese la marca del producto"/>

                    </div>
                    <div className="form-group offset-10 col-md-4">
                        <input type="submit" className="btn btn-warning" value="Ingresar"></input>

                    </div>
                    </div>
                {/* </div> */}
                
                    
                
                
            </form>
            
        );
    }
}

export default Tercero;