import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createUser, reset} from '../features/users/userSlice'




function UserForm() {
    
    const [userData, setUserData] = useState ({
       username: '',
       fatherName: '',
       cnic: '',
       mobileNumber_1: '',
       mobileNumber_2: '',
       address: '',
       area: '',
       userPackage: '',
       dealer: '',
       monthly: '',
       collector: '',
       userStatus: ''

    })

    const {username, fatherName, cnic, mobileNumber_1, mobileNumber_2, address, area, userPackage, dealer, monthly,
    collector, userStatus} = userData

    const dispatch = useDispatch()

    const onChange = (e) => {
        setUserData((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value,
            }))
    }

       const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username: '',
            fatherName: '',
            cnic: '',
            mobileNumber_1: '',
            mobileNumber_2: '',
            address: '',
            area: '',
            userPackage: '',
            dealer: '',
            monthly: '',
            collector: '',
            userStatus: ''
        }
        dispatch(createUser({userData}))
        setUserData('')
    }

  return (
    <section className="user-form">
        <form onSubmit={onSubmit}>
            <div className="inline-form-fields">
                <div className="user-reg-form-group">
                    <label htmlFor="text">Name</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={username}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Father Name</label>
                    <input 
                    type="text" 
                    name="fatherName" 
                    id="father_name" 
                    value={fatherName}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">CNIC</label>
                    <input 
                    type="text" 
                    name="cnic" 
                    id="cnic" 
                    value={cnic}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Mobile Number</label>
                    <input 
                    type="text" 
                    name="mobileNumber_1" 
                    id="mobileNumber_1" 
                    value={mobileNumber_1}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Alternate Mobile Number</label>
                    <input 
                    type="text" 
                    name="mobileNumber_2" 
                    id="mobileNumber_2" 
                    value={mobileNumber_2}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Address</label>
                    <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    value={address}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Area</label>
                    <input 
                    type="text" 
                    name="area" 
                    id="area" 
                    value={area}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Package</label>
                    <input 
                    type="text" 
                    name="userPackage" 
                    id="userPackage" 
                    value={userPackage}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Dealer</label>
                    <input 
                    type="text" 
                    name="dealer" 
                    id="dealer" 
                    value={dealer}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Monthly</label>
                    <input 
                    type="text" 
                    name="monthly" 
                    id="monthly" 
                    value={monthly}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Collector</label>
                    <input 
                    type="text" 
                    name="collector" 
                    id="collector" 
                    value={collector}
                    onChange={onChange}/>
                </div>
                <div className="user-reg-form-group">
                    <label htmlFor="text">Status</label>
                    <input 
                    type="text" 
                    name="userStatus" 
                    id="userStatus" 
                    value={userStatus}
                    onChange={onChange}/>
                </div>
            </div> 
            <div className="form-group">
                <button type='submit' className='btn btn-block submit-btn'>Submit</button>
          </div>   
        </form>
    </section>
  )
}

export default UserForm