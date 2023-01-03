import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    // Redirect whwn logged in
    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()


    if(password !== password2){
      toast.error('Parolalar eşleşmiyor.')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner />
  }
  
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Kayıt Ol 
        </h1>
        <p>Lütfen hesap oluşturun.</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input 
              type="text"
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Adını giriniz.' 
              required
            />
          </div>
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
          <div className='form-group'>
            <input 
              type="password"
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Şifrenizi doğrulayınız.' 
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

export default Register