import React, { useEffect, useState } from 'react'
import InputControl from '../../../components/InputControl/InputControl'
import './UserInfo.scss';
import editIcon from '../../../assets/images/editIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAsync } from '../../../redux/actions/authAction';
// import MoonLoader from "react-spinners/MoonLoader";
import Toastify from '../../../components/Toastify/Toastify';
import { toast } from 'react-toastify';

function UserInfo() {
  const dispatch = useDispatch();


  const [userInfo, setUserInfo] = useState(useSelector(state => state.authReducer.profile));
  const notify = (message) => toast.success(message);


  function updateCustomer(e) {
    e.preventDefault();
    dispatch(updateUserAsync(userInfo));
    notify('İstifadəçi yeniləndi');
  }

  function changeForm(e) {
    let newObj = {};
    let inputName = e.target.name;
    let inputValue = e.target.value;
    newObj[inputName] = inputValue;
    let updatedUserInfo = { ...userInfo, ...newObj };
    setUserInfo(updatedUserInfo);
  }


  return (

    <div className='userInfo'>
      {false ? <div className="spinner">
        {/* <MoonLoader color={'#2DD06E'} loading={user.loading} size={100} /> */}
      </div> :
        <>
          <div className="title">Şəxsi məlumatlar</div>
          <form onSubmit={(e) => updateCustomer(e)} onChange={(e) => changeForm(e)}>
            <div className="row">
              <div className="col-md-6">
                <InputControl title='Ad' value={userInfo.name} name='name' type='text' placeholder='Adınızı daxil edin' />
                <InputControl title='E-mail' value={userInfo.email} name='email' type='email' placeholder='nümunə@gmail.com' />
              </div>
              <div className="col-md-6">
                <InputControl title='Soyad' value={userInfo.surname} name='surname' type='text' placeholder='Soyadınızı daxil edin' />
                {/* <InputControl  title='Mobil nömrə' value={phone} name='phone' type='tel' placeholder='077 - 000 - 00 - 00' /> */}
              </div>
              <button type='submit' className='editBtn'><img src={editIcon} alt="editIcon" /> <span>Məlumatları yenilə</span></button>
            </div>
            <Toastify />
          </form>
        </>}
    </div>
  )
}

export default UserInfo