import React from "react"
import { BoolInputFieldType, StringInputFieldType, TInputControl } from "../../../shared/types/forms.types"
import InputField from "../../../shared/components/text-input/InputField";
import { Link, useNavigate } from "react-router-dom";
import BooleanInput from "../../../shared/components/boolean-input/boolean-input";
import Button from "../../../shared/components/button/Button";

export default function ResetPassword() {

    const navigate = useNavigate();
    const formFieldId = React.useId();
    const [passwordField, setPasswordField] = React.useState<TInputControl<StringInputFieldType>>({type: "email", value: ""});
    const [repeatPasswordField, setRepeatPasswordField] = React.useState<TInputControl<StringInputFieldType>>({type: "password", value: ""});
    function handleClick(){
        navigate("/user/auth/login");
    }
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-4 w-full">
            <InputField id={formFieldId} label="New Password*" inputControl={passwordField} setInputControl={setPasswordField} fieldSize="w-[95%]"/>
            <InputField id={formFieldId} label="Repeat Password*" inputControl={repeatPasswordField} setInputControl={setRepeatPasswordField} fieldSize="w-[95%]"/>
            <div className="w-[95%] mx-auto flex items-center justify-between">
                <Link to="/user/auth/register" className="flex items-end justify-end text-brightRed font-mono">Create account instead?</Link>
                <Link to="/user/auth/forgot" className="flex items-end justify-end text-brightRed italic">Forgot password?</Link>
            </div>
            <div className="w-[95%] mx-auto">
                <Button label="Change Password" styles="bg-brightRed text-white h-10 w-full" onClickHandler={handleClick} />
            </div>
        </div>
    )
}