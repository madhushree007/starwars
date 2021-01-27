import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import { StarShipI } from '../../types/actionTypes';

interface PropsI {
  info?: StarShipI;
  isCardFlipped: boolean;

}

export default function InfoCardStarships ({ info, isCardFlipped }: PropsI) {
  return (
    <ReactCardFlip isFlipped={isCardFlipped} flipDirection="horizontal">
        <div>
          <Card border="info" bg='info' style={{ height: '16rem' }}>
          </Card>
        </div>
 
        <div>
          <Card border="info" style={{ height: '16rem' }}>
            <Card.Title></Card.Title>
            <Card.Body>
              <ListGroup variant="flush">
                  <ListGroup.Item>Name: {info && info.name}</ListGroup.Item>
                  <ListGroup.Item>Model: {info && info.model}</ListGroup.Item>
                  <ListGroup.Item>Cost in credits: {info && info.cost_in_credits}</ListGroup.Item>
                  <ListGroup.Item variant="info">Crew: {info && info.crew}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </ReactCardFlip>
  )
}