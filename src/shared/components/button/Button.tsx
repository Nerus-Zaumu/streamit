import { ButtonLengthType } from "../../types/forms.types";

export default function Button(
    props: { label: string, styles: string, onClickHandler: React.MouseEventHandler<HTMLButtonElement> }
) {
    return <button className={props.styles} onClick={props.onClickHandler}>
        {props.label}
    </button>
}


