import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function Recording({name, type, release, tracklist}) {
    return (
        <div className="mt-3">
            <Card bg="dark" text="white" style={{width:'18rem'}} className="mb-2 me-3">
                <Card.Header>{type}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>
                        <span className="fw-bold">Data de lançamento:</span> {release}
                    </Card.Subtitle>
                    <Card.Text>
                        <Accordion>
                            <Accordion.Item activeKey="0">
                                <Accordion.Header>
                                    <span className="fw-bold">Tracklist:</span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {tracklist.map((track) => (
                                        <ul className="list-unstyled">
                                            <li><span className="fst-italic">{track}</span></li>
                                        </ul>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recording