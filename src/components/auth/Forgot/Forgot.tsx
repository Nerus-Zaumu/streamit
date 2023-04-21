import React from "react"
import { BoolInputFieldType, StringInputFieldType, TInputControl } from "../../../shared/types/forms.types"
import InputField from "../../../shared/components/text-input/InputField";
import { Link } from "react-router-dom";
import BooleanInput from "../../../shared/components/boolean-input/boolean-input";
import Button from "../../../shared/components/button/Button";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

    const navigate = useNavigate()
    const formFieldId = React.useId();
    const [emailField, setEmailField] = React.useState<TInputControl<StringInputFieldType>>({type: "email", value: ""});
    function handleClick(){
        navigate('/user/auth/reset')
    }
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-4 w-full">
            <InputField id={formFieldId} label="Email*" inputControl={emailField} setInputControl={setEmailField} fieldSize="w-[95%]"/>
            <div className="w-[95%] mx-auto flex items-center justify-between">
                <Link to="/user/auth/register" className="flex items-end justify-end text-brightRed font-mono">Create account instead?</Link>
                <Link to="/user/auth/login" className="flex items-end justify-end text-brightRed italic">Login instead?</Link>
            </div>
            <div className="w-[95%] mx-auto">
                <Button label="Send Reset Email" styles="bg-brightRed text-white h-10 w-full" onClickHandler={handleClick} />
            </div>
        </div>
    )
}