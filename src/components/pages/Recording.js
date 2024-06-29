import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function Recording({name, type, cover, release, tracklist}) {
    return (
        <div className="mt-3">
            <Card bg="dark" text="white" style={{width:'18rem'}} className="mb-2 me-3">
                <Card.Img src={cover} height={158} width={158} className="img-fluid" />
                <Card.Header>{type}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>
                        <strong>Data de lançamento:</strong> {release}
                    </Card.Subtitle>
                    <Card.Text>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <strong>Tracklist:</strong>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {tracklist.map((track) => (
                                        <div>
                                            <em>{track}</em><br />
                                        </div>
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