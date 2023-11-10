import { FC, useState } from 'react'
import MyButton from '../../components/myButton/MyButton';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from './userAction';
// import cn from 'classnames'
// import styles from './Login.module.css'

const Login: FC = () => {
    const { user } = useAppSelector(state => state.user)
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useAppDispatch()
    
    const navigate = useNavigate()
    function handleLogin() {
      
      console.log({ username, password });
      dispatch(login({ username, password }))
     
      navigate('/')
    }
  
    if (user) {
      return <Navigate to='/' />
    }
    return (
      <div>
        <input type="text" placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <MyButton text='войти' onClick={handleLogin} />
        
        <p>username: 'kminchelle'</p>
        <p>password: '0lelplR'</p>
      </div>
    )
  }

export default Login