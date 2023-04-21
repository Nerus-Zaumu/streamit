import React from "react";
import { InputFieldType, TInputControl } from "../../types/forms.types";

export default function InputField(props: {id: string, 
     label: string,
     inputControl: TInputControl<InputFieldType>,
     setInputControl: React.Dispatch<React.SetStateAction<TInputControl<InputFieldType>>>,
     fieldSize: string}) {

    return(
        <>
            <div className={"flex flex-col space-y-2 relative" + " " + props.fieldSize}>
                <label htmlFor={props.id + "-" + props.label} className="text-white font-light font-mono">{props.label}</label>
                <input 
                    className="h-12 outline-none focus:outline-none bg-darkGray focus:border-solid focus:border-2 focus:border-brightRed text-white" 
                    type={props.inputControl.type} 
                    value={props.inputControl.value.toString()} 
                    onChange={(e) => props.setInputControl({...props.inputControl, value: e.target.value})} 
                    id={props.id + "-" + props.label}
                    required={props.label.includes('*') && true}
                />
            </div>
        </>
    )
}