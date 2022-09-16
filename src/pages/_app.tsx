import { AppProps } from "next/app"
import { globalStyles } from "../../styles/global"
import { Container, Header } from '../../styles/pages/app'
import  Logo  from '../assets/IgniteLogo.svg'
import Image from "next/future/image"

globalStyles()



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={Logo} alt="" />
      </Header>

       <Component {...pageProps} />
    </Container>
  )
  
}

