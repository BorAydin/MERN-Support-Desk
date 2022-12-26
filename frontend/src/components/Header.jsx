import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Yardım Masası</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Giriş Yap
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser /> Kayıt Ol
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header