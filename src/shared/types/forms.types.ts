// import { TInputControl } from './forms.types';
export type BoolInputFieldType = 'radio' | 'checkbox'
export type StringInputFieldType = 'text' | 'email' | 'password' | 'select' | 'textarea' | 'date'
export type FileInputFieldType = 'file'
export type NumberInputFieldType = 'number'

export type InputFieldType = BoolInputFieldType | StringInputFieldType | FileInputFieldType | NumberInputFieldType  


export type TInputControl<TType extends InputFieldType> = {
    type: TType extends StringInputFieldType ? StringInputFieldType :
    TType extends BoolInputFieldType ? BoolInputFieldType : 
    TType extends FileInputFieldType ? FileInputFieldType : 
    TType extends NumberInputFieldType ? NumberInputFieldType : 
    never;
    value: TType extends BoolInputFieldType ? boolean :
    TType extends StringInputFieldType ? string : 
    TType extends FileInputFieldType ? File : 
    TType extends NumberInputFieldType ? number :
    never;
}

export type RouteConfig = {
    route: string;
    title: string;
}

export type ButtonLengthType = 'full' | 'sizy'