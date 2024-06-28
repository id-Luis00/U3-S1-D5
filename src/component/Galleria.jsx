import { Component } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";


class Galleria extends Component {



    handleClose = () => this.setState({ show: false, selectedMovie: null });
    handleShow = (imdbID) => this.get_movie_details(imdbID);



    get_movie_details = (imdbID) => {
        fetch(`http://www.omdbapi.com/?apikey=9e1ba7fc&i=${imdbID}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Errore nella fetch del film');
                }
            })
            .then(dati => {
                console.log(dati);
                this.setState({ selectedMovie: dati, show: true });
            })
            .catch(err => alert('Errore nella fetch del film: ' + err.message));
    }



    get_fetch = (search) => {
        fetch(`http://www.omdbapi.com/?apikey=9e1ba7fc&s=${search}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error('Errore nella fetch')
                }
            })
            .then(dati => {
                console.log(dati)
                this.setState({ movies: dati.Search })
            })
            .catch(err => alert('errore nella fetch', err))
    }

    componentDidMount() {
        this.get_fetch(this.props.search)
    }

    state = {
        movies: [],
        show: false,
        selectedMovie: null
    }

    render() {
        const { movies, show, selectedMovie } = this.state
        return (
            <Container fluid className=" mx-3 mt-4 p-0">
                <Row >

                    <Col xs={12}>
                        <h2>{this.props.film}</h2>  {/*  titolo della mia galleria */}
                    </Col>



                    <Col xs={12}>
                        <Row xs={2} md={4} lg={6}>
                            {movies.slice(0, 6).map((movie, index) => (
                                <Col>
                                    <img
                                        className="object-fit-cover rounded-3"
                                        style={{ maxHeight: "180px", width: '290px' }}
                                        key={index}
                                        src={movie.Poster}
                                        alt={movie.Title}
                                        onClick={() => this.handleShow(movie.imdbID)}
                                    />

                                    {selectedMovie && (<Modal data-bs-theme='dark' className="text-light" size="lg" show={show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{selectedMovie.Title}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="d-flex ">
                                            <img src={selectedMovie.Poster} alt="" />
                                            <div className="flex-grow-1">
                                                <h2 className="text-center">Trama del film:</h2>
                                                <p className="mt-3 px-2">
                                                    {selectedMovie.Plot}
                                                </p>
                                            </div>
                                        </Modal.Body>
                                    </Modal>)}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>


            </Container >

        )
    }
}

export default Galleria