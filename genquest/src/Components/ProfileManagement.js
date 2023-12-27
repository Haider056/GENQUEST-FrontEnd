import './SidePanel'
import SidePanel from './SidePanel'
import './Styles/Profile.css'
import user from './Assets/user.png'
function Profile() {
    return (
        <div className="Container5">
            <div>
                <SidePanel />
            </div>
            <div className='Form'>
                <div className='header1'>
                    <div>
                    <img src={user} alt="Dummy" />
                    <p>AJ shah</p>
                    </div>
                    <button id="dark">Upload New Photo</button>
                    <button>Delete</button>
                </div>
                <div className='Fields'>
                    <div>
                        <label>First Name</label>
                        <input type='text' placeholder='Enter First Name' />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' placeholder='Enter Last Name' />
                    </div>
                </div>

                <div className='Fields2'>
                    <label>User Name</label>
                    <input type='Text' placeholder='Enter User Name' />
                </div>
                <div className='Fields'>
                    <div>
                        <label>Email Address</label>
                        <input type='text' placeholder='Enter Email Address' />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type='text' placeholder='Enter Phone Number' />
                    </div>
                </div>
                <div className='Password'>
                    <div>
                        <label>Old Password</label>
                        <input type='text' placeholder='Enter Email Address' />
                    </div>
                    <div>
                        <label>New Password</label>
                        <input type='text' placeholder='Enter new Password' />
                    </div>
                </div>
                <div className='Fields2'>
                    <label>Confirm New Password</label>
                    <input type='Text' placeholder='Confirm New Passoword' />
                </div>
                <div className='Submit'>
                    <button>Cancel</button>
                    <button id="dark">Save Changes</button>
                </div>
            </div>
        </div>







    )
}
export default Profile;