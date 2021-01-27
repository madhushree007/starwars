import { Badge, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSWInfo, set_card_flip, set_game_state, user_logout } from '../../action';
import { RootStore } from '../../Store';
import Nav from '../Buttons/Nav';
import PlayMore from '../Buttons/PlayMore';
import InfoCardPeople from '../InfoCard/InfoCardPeople';
import InfoCardPlanets from '../InfoCard/InfoCardPlanets';
import InfoCardStarships from '../InfoCard/InfoCardStarships';
import './game.scss';

const Game: React.FC = () => {
  const playerCardPeople = useSelector((store: RootStore) => store.playerCardPeople);
  const playerCardPlanets = useSelector((store: RootStore) => store.playerCardPlanets);
  const playerCardStarShip = useSelector((store: RootStore) => store.playerCardStarShip);
  const computerCardPeople = useSelector((store: RootStore) => store.computerCardPeople);
  const computerCardPlanets = useSelector((store: RootStore) => store.computerCardPlanets);
  const computerCardStarShip = useSelector((store: RootStore) => store.computerCardStarShip);
  const isCardFlipped = useSelector((store: RootStore) => store.isFlipped);
  const playGameState = useSelector((store: RootStore) => store.playGame);
  const playerScore = useSelector((store: RootStore) => store.playerScore);
  const computerScore = useSelector((store: RootStore) => store.computerScore);
  const username = useSelector((store: RootStore) => store.username);
  const playOption = useSelector((store: RootStore) => store.playOption);
  
  const dispatch = useDispatch();

  // handles the play game, set card flip, fetch data and set game state
  const playGame = () => {
    dispatch(set_card_flip(true));
    console.log(playOption);
    if(playOption) dispatch(fetchSWInfo(playOption))
    dispatch(set_game_state(false));
  }

  return (
    <>
      <div className='welcome'>
          <h2>Welcome {username}!</h2>
          <h6 onClick={() => dispatch(user_logout())}>Logout</h6>
      </div>
      <div className='gameRules'>
        <h4>Let's play card game with computer.</h4>
        <p>To play the game click on PLAY button and it will randomly fetch the data from The Star Wars API. Whichever's card gets more mass value will get one point. In case of equal mass no one gets points</p>
      </div>
      <Nav />
      
      <Row>
        <Col><h5>{username}'s Score <Badge variant="primary">{playerScore}</Badge></h5></Col>
        <Col><h5>Computer's Score <Badge variant="primary">{computerScore}</Badge></h5></Col>
      </Row>
      <div className='cardContainer'>
        
        <Row>
          <Col>
            { playOption === 'people' && <InfoCardPeople info={playerCardPeople} isCardFlipped={isCardFlipped} /> }
            { playOption === 'planets' && <InfoCardPlanets info={playerCardPlanets} isCardFlipped={isCardFlipped} /> }
            { playOption === 'starships' && <InfoCardStarships info={playerCardStarShip} isCardFlipped={isCardFlipped} /> }
          </Col>
          <Col>
            { playOption === 'people' && <InfoCardPeople info={computerCardPeople} isCardFlipped={isCardFlipped} /> }
            { playOption === 'planets' && <InfoCardPlanets info={computerCardPlanets} isCardFlipped={isCardFlipped} /> }
            { playOption === 'starships' && <InfoCardStarships info={computerCardStarShip} isCardFlipped={isCardFlipped} /> }
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