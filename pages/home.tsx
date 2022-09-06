import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import {Search} from '../components/search';
// STYLE - imports
import {colors} from '../public/consts'
import {breakpoints} from '../public/consts'

const bp = breakpoints

type Props = {
  className?:string
}

const Home_unstyled = (props: Props) => {
  return (
      <section className={props.className}>
        <Global
          styles={css`
            body{
              height: 100vh;
            }
            #root{
              height:100%;
            }
            .app{
              height:100%;
            }

          `}
        />
        <Search size="big"/>
      </section>
  )
}

const Home = styled(Home_unstyled)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
`

export default Home;
