import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { set_card_flip, set_game_state } from '../../action';

const PlayMore: React.FC = () => {
  const dispatch = useDispatch();

  const setGame = () => {
    dispatch(set_card_flip(false));
    dispatch(set_game_state(true));
  }

  return (
    <div style={{paddingTop: '20px'}}>
      <Card bg='info' text='white' className="text-center">
        <Card.Body>
          <h4>Isn't it interesting? Let's play again!</h4>
          <Button aria-label="play-more" variant="warning" style={{width: '10rem'}} onClick={setGame} >Play Again</Button>
        </Card.Body>
      </Card>
    </div>

  )
};

export default PlayMore;