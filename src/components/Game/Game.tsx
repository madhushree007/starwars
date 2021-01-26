import { Badge, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSWInfo, set_card_flip, set_game_state } from '../../action';
import { RootStore } from '../../Store';
import PlayMore from '../Buttons/PlayMore';
import InfoCard from '../InfoCard/InfoCard';
import './game.scss';

const Game: React.FC = () => {
  const playerCard = useSelector((store: RootStore) => store.playerCard);
  const computerCard = useSelector((store: RootStore) => store.computerCard);
  const isCardFlipped = useSelector((store: RootStore) => store.isFlipped);
  const playGameState = useSelector((store: RootStore) => store.playGame);
  const playerScore = useSelector((store: RootStore) => store.playerScore);
  const computerScore = useSelector((store: RootStore) => store.computerScore);
  const username = useSelector((store: RootStore) => store.username);
  
  const dispatch = useDispatch();

  const playGame = () => {
    dispatch(set_card_flip(true));
    dispatch(fetchSWInfo());
    dispatch(set_game_state(false));
  }

  const setGame = () => {
    dispatch(set_card_flip(false));
    dispatch(set_game_state(true));
  }

  return (
    <>
    <div>
        <h2>Welcome {username}!</h2>
        <h6>logout</h6>
    </div>
    <div>
      <h4>Let's play card game with computer.</h4>
      <p>To play the game click on PLAY button and it will randomly fetch the data. Whoever gets more mass value will get one point.</p>
    </div>
    <Row>
      <Col><h5>{username}'s Score <Badge variant="primary">{playerScore}</Badge></h5></Col>
      <Col><h5>Computer's Score <Badge variant="primary">{computerScore}</Badge></h5></Col>
    </Row>
    <div className='cardContainer'>
      
      <Row>
        <Col>
          <InfoCard info={playerCard} isCardFlipped={isCardFlipped} />
        </Col>
        <Col>
          <InfoCard info={computerCard} isCardFlipped={isCardFlipped} />
        </Col>
      </Row>
      <Row className='playButton'>
        {playGameState === true && <Button variant="warning" style={{width: '10rem'}} onClick={playGame}>Play</Button>}
      </Row>
      
    </div>
    {playGameState === false && <PlayMore /> }
  </>
  )
};

export default Game;