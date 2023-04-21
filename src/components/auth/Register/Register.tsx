import React from "react";
import InputField from "../../../shared/components/text-input/InputField";
import { StringInputFieldType, TInputControl } from "../../../shared/types/forms.types";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../shared/components/button/Button";

export default function Register(){

    const navigate = useNavigate();
    const formFieldId = React.useId()
    //Form Fields Def
    const [usernameField, setUsername] = React.useState<TInputControl<StringInputFieldType>>({value: "", type: "text"});
    const [emailField, setEmail] = React.useState<TInputControl<StringInputFieldType>>({type: "email", value: ""});
    const [firstNameField, setFirstName] = React.useState<TInputControl<StringInputFieldType>>({value: "", type: "text"});
    const [lastNameField, setLastName] = React.useState<TInputControl<StringInputFieldType>>({value: "", type: "text"});
    const [passwordField, setPassword] = React.useState<TInputControl<StringInputFieldType>>({value: "", type: "text"});
    const [repeatPasswordField, setRepeatPassword] = React.useState<TInputControl<StringInputFieldType>>({value: "", type: "text"});
    function handleClick(){
        navigate('/user/auth/login');
    }
    return (
        <>
            <form className="flex flex-col items-center justify-center space-y-4 py-4 w-full">
                <div className="flex md:flex-row flex-col items-center justify-center md:space-x-4 md:space-y-0 space-y-4 w-full">
                    <InputField id={formFieldId} label="Username*" inputControl={usernameField} setInputControl={setUsername} fieldSize="md:w-[45%] w-[95%]"/>
                    <InputField id={formFieldId} label="Email*" inputControl={emailField} setInputControl={setEmail} fieldSize="md:w-[45%] w-[95%]"/>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center md:space-x-4 md:space-y-0 space-y-4 w-full">
                    <InputField id={formFieldId} label="First Name" inputControl={firstNameField} setInputControl={setFirstName} fieldSize="md:w-[45%] w-[95%]"/>
                    <InputField id={formFieldId} label="Last Name" inputControl={lastNameField} setInputControl={setLastName} fieldSize="md:w-[45%] w-[95%]"/>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center md:space-x-4 md:space-y-0 space-y-4 w-full">
                    <InputField id={formFieldId} label="Password*" inputControl={passwordField} setInputControl={setPassword} fieldSize="md:w-[45%] w-[95%]"/>
                    <InputField id={formFieldId} label="Repeat Password*" inputControl={repeatPasswordField} setInputControl={setRepeatPassword} fieldSize="md:w-[45%] w-[95%]"/>
                </div>
            </form>

            <div className="flex flex-col space-y-4 w-[90%]">
                <Link to='/user/auth/login' className="text-brightRed font-mono">Login instead?</Link>
                <Button label="Register" styles="bg-brightRed text-white h-10 w-full" onClickHandler={handleClick} />
            </div>
        </>
    )
}