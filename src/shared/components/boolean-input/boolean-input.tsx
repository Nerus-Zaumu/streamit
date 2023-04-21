import React from "react";
import { BoolInputFieldType, TInputControl } from "../../types/forms.types";

export default function BooleanInput(
    props: {
     label: string,
     inputControl: TInputControl<BoolInputFieldType>,
     setInputControl: React.Dispatch<React.SetStateAction<TInputControl<BoolInputFieldType>>>,
     fieldSize: string,
     id: string,
    }
){
    const [checked, setChecked] = React.useState<boolean>(false)
    return (
        <>
            <div className={"flex flex-row space-x-3 relative" + " " + props.fieldSize}>
                <input type={props.inputControl.type} 
                    value={props.inputControl.value === true ? 'yes' : 'no'}
                    onChange={(e) => props.setInputControl({...props.inputControl, value: e.target.value === 'yes' ? true : false})}
                    id={props.id + '-' + props.label}
                    onClick={() => {
                        setChecked(!checked)
                    }}
                />
                <label htmlFor={props.id + '-' + props.label} className={"text-white font-mono"}>{props.label}</label>
            </div>
        </>
    )
}