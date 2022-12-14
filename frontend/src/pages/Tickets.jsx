import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { getTickets, reset } from '../features/tickets/ticketSlice'

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
    <div>
      <h1>Biletler</h1>
    </div>
  )
}

export default Tickets