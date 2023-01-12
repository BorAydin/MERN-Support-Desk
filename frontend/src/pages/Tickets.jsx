import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import TicketItem from '../components/TicketItem'

function Tickets() {
  const {tickets, isLoading, isSuccess} = useSelector((state) => state.tickets)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if(isSuccess){
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <BackButton url='/' />
      <h1>İstekler</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Tarih</div>
          <div>Ürün</div>
          <div>Durum</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  )
}

export default Tickets