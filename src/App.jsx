import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./component/NavBar";
import { Container } from "react-bootstrap";
import Galleria from "./component/Galleria";

function App() {
  return (

    <Container fluid className="px-5">
      <header>
        <NavBar />
      </header>

      <main>
        <Container fluid className="mt-5 text-light p-0 overflow-hidden">
          <Galleria film={'Star Wars'} search={'Star Wars'} />
          <Galleria film={'Harry Potter'} search={'Harry Potter'} />
          <Galleria film={'Mamma mia'} search={'Mamma Mia'} />
          <Galleria film={'Pizza Films'} search={'Pizza'} />


        </Container>
      </main>

    </Container>

  );
}

export default App;
