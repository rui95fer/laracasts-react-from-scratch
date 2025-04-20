import { PageWrapper } from "./components/PageWrapper.jsx";
import { Container } from "./components/Container.jsx";
import { Header } from "./components/Header.jsx";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
      </Container>
    </PageWrapper>
  );
}
