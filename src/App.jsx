import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./component/NavBar";
import { Button, Container, Modal } from "react-bootstrap";
import Galleria from "./component/Galleria";
import MyFooter from "./component/MyFooter";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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

          <>
            <Button variant="secondary" onClick={handleShow}>
              Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
            </Modal>
          </>


        </Container>
      </main>

      <footer>
        <MyFooter />
      </footer>

    </Container>

  );
}

export default App;
