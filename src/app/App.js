import { AppWrapper } from "./styles.js";
import { Header } from "../features/Header/index.jsx";
import { Container } from "../features/Calendar/index.jsx";
function App() {
  return (
    <AppWrapper>
      <Header />
      <Container />
    </AppWrapper>
  );
}

export default App;
