import MainLayout from "../components/MainLayout";
import Container from "../components/Container";

export default function Home() {

  return (
      <MainLayout title="Main">
          <Container>
              <h1>Hello Next.js</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </Container>
      </MainLayout>
  )
}
