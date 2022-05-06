import './CoasterCard.css'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const CoasterCard = ({ _id, imageUrl, title }) => {

    return (
        <Card className="CoasterCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="d-grid gap-2">
                    <Link to={`/detalles/${_id}`} className="btn btn-dark">Ver detalles</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CoasterCard