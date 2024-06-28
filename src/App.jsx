import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./component/NavBar";
import { Container } from "react-bootstrap";
import Galleria from "./component/Galleria";
import MyFooter from "./component/MyFooter";


function App() {


  return (

    <Container fluid className="px-5">
      <header>
        <NavBar />
      </header>

      <main>
        <Container fluid className="pe-4 mt-5 text-light p-0 ">
          <Galleria film={'Star Wars'} search={'Star Wars'} />
          <Galleria film={'Harry Potter'} search={'Harry Potter'} />
          <Galleria film={'Mamma mia'} search={'Mamma Mia'} />
          <Galleria film={'Pizza Films'} search={'Pizza'} />

        </Container>
      </main>

      <footer>
        <MyFooter />
      </footer>

    </Container>

  );
}

export default App;
