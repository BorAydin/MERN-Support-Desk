import { useEffect } from "react"
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from "react-redux"
import { getTicket, reset } from "../features/tickets/ticketSlice"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"

function Ticket() {
  const {ticket, isLoading, isSucces, isError, message} = useSelector((state) => state.tickets)

  const params = useParams()
  const dispatch = useDispatch()
  const {ticketId} = useParams()

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    dispatch(getTicket(ticketId))
  }, [isError, message, ticketId])

  if(isLoading){
    <Spinner />
  }

  if(isError) {
    return <h3>Bazı şeyler yanlış oldu.</h3>
  }
  
  let status = ticket.status
  if(status === 'new'){
    status = 'yeni'
  }
  else if( status === 'open'){
    status = 'açık'
  }
  else if( status === 'close'){
    status = 'kapalı'
  } else {
    status = 'durumsuz'
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url='/tickets' />
        <h2>
          İstek ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>{status}</span>
        </h2>
        <h3>Oluşturulma Tarihi: {new Date(ticket.createdAt).toLocaleString('tr-TR')}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Sorun Açıklaması</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  )
}

export default Ticket