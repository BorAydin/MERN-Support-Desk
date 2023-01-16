import { useEffect } from "react"
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from "react-redux"
import { getTicket, closeTicket } from "../features/tickets/ticketSlice"
import { getNotes, reset as notesReset } from "../features/notes/noteSlice"
import { useParams, useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import NoteItem from "../components/NoteItem"

function Ticket() {
  const {ticket, isLoading, isSucces, isError, message} = useSelector((state) => state.tickets)
  const {notes, isLoading: notesIsloading} = useSelector((state) => state.notes)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {ticketId} = useParams()

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    dispatch(getTicket(ticketId))
    dispatch(getNotes(ticketId))
  }, [isError, message, ticketId])

  // Close ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
    toast.success('İstek Kapatıldı.')
    navigate('/tickets')
  }

  if(isLoading || notesIsloading){
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
  else if( status === 'closed'){
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
        <h3>Ürün: {ticket.product} </h3>
        <hr />
        <div className="ticket-desc">
          <h3>Sorun Açıklaması</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Notlar</h2>
      </header>

      {notes.map((note) => (
        <NoteItem key={note._id} note={note}/>
      ))}

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">İsteği Kapat</button>
      )}
    </div>
  )
}

export default Ticket