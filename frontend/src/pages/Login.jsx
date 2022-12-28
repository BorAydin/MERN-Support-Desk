import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { login } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, message } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Giriş Yap
        </h1>
        <p>Lütfen giriş yapınız.</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input 
              type="email"
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Epostanızı giriniz.' 
              required
            />
          </div>
          <div className='form-group'>
            <input 
              type="password"
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Şifrenizi giriniz.' 
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Gönder</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login