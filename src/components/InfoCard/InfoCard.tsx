import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import { StarShipI } from '../../types/actionTypes';

interface PropsI {
  info?: StarShipI;
  isCardFlipped: boolean;

}

export default function InfoCard ({ info, isCardFlipped }: PropsI) {
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
                  <ListGroup.Item>Height: {info && info.height}</ListGroup.Item>
                  <ListGroup.Item>Gender: {info && info.gender}</ListGroup.Item>
                  <ListGroup.Item variant="info">Mass: {info && info.mass}</ListGroup.Item>
                  
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </ReactCardFlip>
  )
}