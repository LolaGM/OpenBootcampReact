/*vamos a crear con rccp un componente de tipo clase pero los hay de tipo función*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*Los proptypes sirven para especificar el tipo de dato que estamos pasándole: recordemos que JS el tipado es débil. EL name debe ser un STRING de texto y no un número o un booleano por ejemplo
Debajo en propTypes especificamos el dato*/


/* 
-componente extendido por la clase creada automáticamente al escribir rccp
-dentro tiene método RENDER con el que devuelve HTML
-NO se puede renderizar más de un elemento HTML: solo tendremos un DIV = un único elemento PADRE del que dependa el resto
-Ahora tenemos que pintar este componente en algún sitio. Sólo se está pintando actualmente en navegador APP.jsx 
-Sustituiremos el HOLA MUNDO en elemento p por el componente creado de GREETING*/
class Greeting extends Component {

    /*le avamos a añadir un constructor a esta clase que podría ser usado de componente PADRE a componente HIJO*/
    /*al connstructor entre paréntesis le pasamos las propiedades o atributos que puede recibir un componente: cualquier atributo de un elemento HTML*/
    /*dentro le pasamos super y props como parámetro*/
    /*con this state le pasamos un valor privado= una información que tiene el component y que puede modificarse. Cuando se modifique, actualizaría la vista*/
    constructor(props){
        super(props);
        this.state = {
            age : 29
        }
    }
    /*método de renderizado que devuelve el único elementro HTML permitido */
    /*dentro del render = del h1 vamos a concatenar código JS dentro usando llaves {}*/
    /*Entre llaves decimos: de las propiedades que vamos a recibir,voy a pintar el name. EN navegador lo veremos con un espacio en blanco.Debemos ir a APP y en el component pintarle la propiedad*/
    /*le paso también el H2 con la edad. Cogemos los datos privados del componente y accedemos a la variable edad AGE*/
    render() {
        return (
            <div>
                <h1>Hello! My name is {this.props.name}</h1>
                <h2>I'm  {this.state.age} years-old</h2>
            </div>
        );
    }
}

/*los props tienen tipos.
Esto pongamos que name es un objeto JS normal
A la propiedad name le pasamos los proptypes como valor indicando el TIPO como: STRING o number,elemento HTML, instancia de,etc
Esto es para tipar internamente la estructura de los PROPS.
La TRAILING coma al final de frase es recomendable para objetos*/
Greeting.propTypes = {
    name:PropTypes.string,
};


export default Greeting;
