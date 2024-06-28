import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";


class Galleria extends Component {





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
        movies: []
    }

    render() {
        const { movies } = this.state
        return (
            <Container fluid className=" mx-3 mt-4 p-0">
                <Row >

                    <Col xs={12}>
                        <h2>{this.props.film}</h2>  {/*  titolo dell amia galleria */}
                    </Col>



                    <Col xs={12}>
                        <Row xs={2} md={4} lg={6}>
                            {movies.slice(0, 6).map((movie, index) => (
                                <Col>
                                    <img
                                        className="object-fit-cover "
                                        style={{ maxHeight: "160px", width: '293.33px' }}
                                        key={index}
                                        src={movie.Poster}
                                        alt={movie.title}
                                    />
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