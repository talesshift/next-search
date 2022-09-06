import Image from 'next/image'
import styled from '@emotion/styled'
// ASSETS - imports
import logo from '../assets/logo.png'
// COMPONENTS - imports
import {breakpoints} from '../public/consts'

const bp = breakpoints

type Props = {
    className?:string
}

const Header_unstyled = (props: Props) => {

    return (
        <nav className={props.className}>
            <div className='container clearfix'>
                <div className='logo'><a href="http://metamemo.info"><Image src="/assets/logo.png" alt="home-page"/></a></div>
                <div className='menu'><a href="http://metamemo.info/content/saiba">A Metamemo</a></div>
            </div>
        </nav>
    )
}

const Header = styled(Header_unstyled)`
    height: auto;
    flex: 0 1 auto;
    line-height: initial;
    padding: 1.6875rem 0 1.875rem 0;
    background-color: #F4F4F4;
    box-shadow: none;

    a:visited, a:active {
        color: inherit;
    }

    .container{
        max-width: 74.1875rem !important;
        width: 95% !important;
        margin: 0 auto;
        box-sizing: inherit;
    }

    .logo, .menu{
        width: 100%;
        float: left;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 .75rem;
        min-height: 1px;
        line-height:initial;
    }

    .menu a{
        padding: 0;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 2.1875rem;
    }
    ${bp.get('s')} {
        .container div{
            margin-top: 0.625rem;
            margin-bottom: 0.625rem;
        }
    }
    ${bp.get('m')} {
        .logo{
            width: 41.6666666667%;
            margin-left: auto;
        }
        .menu{
            width: 58.3333333333%;
            margin-left: auto;
        }
    }
`

export default Header