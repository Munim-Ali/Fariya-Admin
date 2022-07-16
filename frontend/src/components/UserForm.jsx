import e from 'cors'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'



function UserForm() {
    const [username, setUserName] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <section className="user-form">
        <form onSubmit={onSubmit}>
            <div className="inline-form-fields">
                <div className="user-reg-form-group">
                    <label htmlFor="text">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>    
        </form>
    </section>
  )
}

export default UserForm