import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid, Card } from 'semantic-ui-react'
import Link from 'next/link'



const Layout: FunctionComponent<{ pageProps: any }> = ({ children, pageProps }) => {
  const router = useRouter()
  const clickHandler = async () => {
    const res = await fetch('/api/user/logout');
    if (res.status === 200) {
      router.push('/user/login')
    }
  }
  return (
    // 모든 페이지에 적용될 레이아웃 디자인 (Header Or Footer)
    <div>
      <hr />
      <Container textAlign="center">
        {pageProps.user
          ?
          (<Grid centered>

            <Grid.Row textAlign="center">
              <button className="ui button facebook" onClick={clickHandler}>{pageProps.user?.name}님 Logout</button>

              <Link href="/challenge" >
                <button className="ui button">Challenge</button>
              </Link>
              <Link href="/diary">
                <button className="ui button">Diary</button>
              </Link>
              <Link href="/recipe">
                <button className="ui button">Recipe</button>
              </Link>
            </Grid.Row>
          </Grid>)
          :
          <h1>요건 다 내꺼</h1>}


      </Container>
      <hr />
      <Container textAlign="center">
        {children}
      </Container>
      <hr />
      <Container textAlign="center">

        <Card centered>
          <button onClick={() => { alert("강래헌, 김민성, 박지훈, 조은혜") }} className="ui button instagram animated" > &copy; Team 요건 다 내꺼</button>


        </Card>
      </Container>
    </div >
  )
}

export default Layout
