import Card from "react-bootstrap/Card";

function Recording({name, type, release, tracklist}) {
    return (
        <div className="mt-3">
            <Card bg="success" text="white" style={{width:'18rem'}} className="mb-2">
                <Card.Header>{type}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>
                        <span className="fw-bold">Data de lançamento:</span> {release}
                    </Card.Subtitle>
                    <Card.Text>
                        <span className="fw-bold">Tracklist:</span>
                        {tracklist.map((track) => (
                            <ul className="list-unstyled">
                                <li><span className="fst-italic">{track}</span></li>
                            </ul>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recording