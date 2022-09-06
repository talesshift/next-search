import styled from "@emotion/styled"
import { breakpoints, colors } from "../public/consts"

type LogoProps = {
    primary?:string|undefined,
    secondary?:string|undefined,
    size?:number,
}


const bp = breakpoints

const Logo = styled.span<LogoProps>`
    margin: 1rem auto;
    cursor: pointer;
    color: ${props => (colors.get(props.primary || "black"))};
    font-size:${props => ((props.size||50)/16)}rem;
    font-weight: bolder;
    font-family: 'Fira Sans', sans-serif !important;
    span{
        color: ${props => (colors.get(props.secondary || "black"))};
    }
    ${bp.get('s')} {

    }
`

export default Logo;