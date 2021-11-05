import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'

import { getUserOrRedirect } from './api/auth'

import { Card, CardHeader, Container } from 'semantic-ui-react';



const Home: NextPage<any> = ({ user: { name, email } }) => {


  return (

    <Container textAlign="center">
      <Card centered >
        <h3>Hello {name}</h3>

        <p>This is Main Page</p>
        <p>Your Email : {email}</p>
      </Card>


    </Container>


  )
}


// 서버(db)에서 데이터를 받아와서 해당 page에 Props로 뿌리는 Logic 
export const getServerSideProps: GetServerSideProps<any> = async (ctx) => {
  // 유저 인증 로직
  const user = await getUserOrRedirect(ctx);
  console.log("user:", user);
  return { props: { user } };

}

export default Home
