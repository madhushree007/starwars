import { Badge, Button, Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from "react-redux";
import { play_option } from '../../action';
import { RootStore } from "../../Store";

const Nav: React.FC = () => {
  const playOption = useSelector((store: RootStore) => store.playOption);
  const dispatch = useDispatch();
  return (
    <Row>
      <Col>
        <h5>
        <Button variant={playOption === 'people' ? 'primary' : 'light'} onClick={() => dispatch(play_option('people'))}>
          People <Badge pill variant="light">(mass)</Badge>
        </Button>
        <Button variant={playOption === 'planets' ? 'primary' : 'light'} onClick={() => dispatch(play_option('planets'))}>
          Planets <Badge pill variant="light">(diameter)</Badge>
        </Button>
        <Button variant={playOption === 'starships' ? 'primary' : 'light'} onClick={() => dispatch(play_option('starships'))}>
          Starships <Badge pill variant="light">(crew)</Badge>
        </Button>
        </h5>
      </Col>
    </Row>
  );
}

export default Nav;