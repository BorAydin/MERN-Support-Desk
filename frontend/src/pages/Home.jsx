import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt} from "react-icons/fa"

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Neye ihtiyacın var?</h1>
        <p>Belirtiniz.</p>
      </section>

      <Link to='/new-ticket' className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Yeni bir istek oluşturun.
      </Link>

      <Link to='/tickets' className="btn btn-block">
        <FaTicketAlt /> İsteklerimi görüntüle.
      </Link>
    </>
  )
}

export default Home