import React from "react"
import { BoolInputFieldType, StringInputFieldType, TInputControl } from "../../../shared/types/forms.types"
import InputField from "../../../shared/components/text-input/InputField";
import { Link, useNavigate } from "react-router-dom";
import BooleanInput from "../../../shared/components/boolean-input/boolean-input";
import Button from "../../../shared/components/button/Button";

export default function Login() {
    const formFieldId = React.useId();
    const navigate = useNavigate();
    const [emailField, setEmailField] = React.useState<TInputControl<StringInputFieldType>>({type: "email", value: ""});
    const [passwordField, setPasswordField] = React.useState<TInputControl<StringInputFieldType>>({type: "password", value: ""});
    const [rememberMeField, setRememberMeField] = React.useState<TInputControl<BoolInputFieldType>>({type: "checkbox", value: false});
    function handleClick(){
        navigate('/dashboard/home')
    }
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-4 w-full">
            <InputField id={formFieldId} label="Email*" inputControl={emailField} setInputControl={setEmailField} fieldSize="w-[95%]"/>
            <InputField id={formFieldId} label="Password*" inputControl={passwordField} setInputControl={setPasswordField} fieldSize="w-[95%]"/>
            <div className="w-[95%] mx-auto flex items-center justify-between">
                <Link to="/user/auth/register" className="flex items-end justify-end text-brightRed font-mono">Create account instead?</Link>
                <Link to="/user/auth/forgot" className="flex items-end justify-end text-brightRed italic">Forgot password?</Link>
            </div>
            <BooleanInput id={formFieldId} label="Remember Me" inputControl={rememberMeField} setInputControl={setRememberMeField} fieldSize="w-[95%]"/>
            <div className="w-[95%] mx-auto">
                <Button label="Login" styles="bg-brightRed text-white h-10 w-full" onClickHandler={handleClick} />
            </div>
        </div>
    )
}