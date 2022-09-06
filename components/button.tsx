import styled from "@emotion/styled";
import {colors} from '../public/consts';

type ButtonProps = {
    color?:string|undefined,
    text?:string|undefined,
    size?:"big"|"medium"|"small",
}

type sizeType = {
    padding:string,
    font:number,
    weight:string,
}

const sizes = new Map<string, sizeType>(
    [
        ['big',{padding:`1.125rem 4.25rem`,font:1,weight:`bolder`}],
        ['medium',{padding:`0.9rem 5.25vw`,font:1,weight:`bolder`}],
        ['small',{padding:`0.75rem 1.125rem`,font:1,weight:`normal`}],
    ]
)

const Button= styled.button<ButtonProps>`
    display: inline-block;
    border: 0;
    font-family: 'Fira Sans';
    padding: ${props => (sizes.get(props.size || 'medium')!.padding)};
    font-style: normal;
    font-weight: ${props => (sizes.get(props.size || 'medium')!.weight)};
    line-height: 1.375rem;
    text-align: center;
    font-size: ${props => (sizes.get(props.size || 'medium')!.font)}rem;
    border-radius: 0.5rem;
    box-shadow: none;
    text-transform: none;
    text-decoration: none;
    cursor: pointer;
    color:${props => (colors.get(props.text || "white"))};
    background-color: ${props => (colors.get(props.color || "pink"))};
`

export default Button