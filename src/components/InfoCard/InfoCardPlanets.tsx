import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import { PlanetsI } from '../../types/actionTypes';

interface PropsI {
  info?: PlanetsI;
  isCardFlipped: boolean;
}

export default function InfoCardPlanets ({ info, isCardFlipped }: PropsI) {
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
                  <ListGroup.Item>Rotation Period: {info && info.rotation_period}</ListGroup.Item>
                  <ListGroup.Item>Orbital: {info && info.orbital_period}</ListGroup.Item>
                  <ListGroup.Item variant="info">Diameter: {info && info.diameter}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </ReactCardFlip>
  )
}