import { useState } from "react"
import {useSelector} from 'react-redux'

function NewTicket() {
  const {user} = useSelector((state) => state.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <>
      <section className="heading">
        <h1>Yeni bir istek oluşturun</h1>
        <p>Tüm alanları doldurun.</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Müşteri ismi</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Müşteri e-posta adresi</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Ürün</label>
            <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
              <option value="iPhone">iPhone</option>
              <option value="Macbook">Macbook</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Sorunu tanımlayın</label>
            <textarea 
              name="description" 
              id="description" 
              className="form-control" 
              placeholder="Tanım" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Gönder</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket