import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from './../elementos/Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {


    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
        //console.log(e.target.value);
    }


    const validacion = () => {

        if(expresionRegular) {
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
                //console.log('Input correcto');
            } else {
                cambiarEstado({...estado, valido: 'false'});
                //console.log('Input incorrecto');
            }
        }

        if(funcion){
            funcion();
        }
        


    }


    return (
        <div>

            <Label htmlFor={name} valido={estado.valido}>{label}</Label>

            <GrupoInput>

                <Input 
                    type={tipo} 
                    placeholder={placeholder} 
                    id={name} 
                    value={estado.campo}
                    onChange={onChange} //Propiedad: Funcion que cambia el estado
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />


                <IconoValidacion 
                    icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                    valido={estado.valido} 
                /> {/* Se utiliza posicionamiento absoluto */}

            </GrupoInput>

            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>

        </div>
    );
}

export default ComponenteInput;