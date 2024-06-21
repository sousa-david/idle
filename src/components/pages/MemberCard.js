import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MemberCard({id, name, description}) {
    return (
        <div>
            <Card className="mb-3 me-2" style={{width:'18rem'}}>
                <Card.Header>
                    <Card.Title>{name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/member/${id}`}><Button variant="primary">Ler mais</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default MemberCard