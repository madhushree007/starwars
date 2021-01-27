import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { user_login } from '../../action';
import './login.scss';

export default function Login () {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(user_login(user));
  }
  return (
    <div className='login'>
      <div className='inner'>
        <Card className="text-center" border="info" bg='info' text='white'>
      <Card.Body>
        <div>
            <h1>
              Welcome <br /><span>to</span><br />Card Game
            </h1>
          </div>

        <form className='formDiv' onSubmit={onSubmit}>
          <label htmlFor='firstName'>Please Enter Your Name</label>
          <input name="firstName" value={user} onChange={e => setUser(e.target.value)}  />
          <Button type="submit" variant="warning" style={{width: '14rem'}}>ENTER</Button>
        </form>
        </Card.Body>
    </Card>
      </div>
    </div>
    
  )
}