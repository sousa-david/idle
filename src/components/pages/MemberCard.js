import styles from "./MemberCard.module.css";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MemberCard({id, name, description, image, status}) {
    return (
        <div>
            <Card className="mb-3 me-2" style={{width:'18rem'}}>
                <Card.Img src={image} height={158} width={158} className="img-fluid" />
                <Card.Header>
                    <Card.Title>{name}</Card.Title>
                    {status === 'former' ? <Card.Subtitle className="text-muted">Ex-membro</Card.Subtitle> : ''}
                </Card.Header>
                <Card.Body>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/member/${id}`}>
                    <Button className={styles.customButton}>Ver perfil</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MemberCard