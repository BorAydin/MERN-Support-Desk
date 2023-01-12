import { Link } from 'react-router-dom'

function TicketItem({ ticket }) {
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
    <div className='ticket'>
      <div>{new Date(ticket.createdAt).toLocaleString('tr-TR')}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{status}</div>
      <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'> Göster</Link>
    </div>
  )
}

export default TicketItem