import React, { useState, useEffect } from "react";
import authImg from "../../assets/icons/authImg.svg";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { signup } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";


import {
  Container,
  Wrapper,
  FormContainer,
  Icons,
  FormStyled,
  AuthImg,
} from "./RegisterStyle";
import { Link } from "react-router-dom";
import Toastify from "../Toastify/Toastify";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


const formInit = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: ""
}

const Register = () => {

  const [formData, setFormData] = useState(formInit);
  const [error, setError] = useState(null);
  const auth = useSelector(state => state.authReducer);

  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  let navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(signup(formData));
    } catch (err) {

    }
  }

  useEffect(() => {
    if (!auth.loading) {
      if (auth.error) {
        toast.error(auth.error);
      }
      if (auth.profile) {
        toast.success('Qeydiyyat uğurla tamamlandı');
        navigate("/profile/order-list", { replace: true });
      }
    }

  }, [auth]);

  return (
    <Container>
      <Toastify />
      <Wrapper>
        <FormContainer>
          <h2>Qeydiyyat</h2>
          <Icons>
            <div className="icon">
              <span>
                <FaFacebookF />
              </span>
              <p>Facebook ilə</p>
            </div>
            <div className="icon">
              <span className="google">
                <BsGoogle />
              </span>

              <p>Google ilə</p>
            </div>
          </Icons>
          <p>və ya</p>

          <FormStyled onSubmit={register}>
            <div>
              <label>Ad</label>
              <input
                onChange={onChangeHandler}
                type="text"
                name="name"
                id="name"
                placeholder="Adınızı daxil edin"
              />
            </div>

            <div>
              <label>Soyad</label>
              <input
                onChange={onChangeHandler}
                type="text"
                name="surname"
                id="surname"
                placeholder="Soyadınızı daxil edin"
              />
            </div>

            <div>
              <label>E-mail</label>
              <input
                onChange={onChangeHandler}
                type="email"
                name="email"
                id="email"
                placeholder="nümunə@gmail.com"
              />
            </div>


            <div>
              <label>Şifrə</label>
              <input
                onChange={onChangeHandler}
                type="password"
                name="password"
                id="password"
                placeholder="Şifrənizi daxil edin"
              />
            </div>

            <div>
              <label>Şifrə təkrarı</label>
              <input
                onChange={onChangeHandler}
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Şifrənizi təkrar daxil edin"
              />
            </div>

            <div>
              <input type="checkbox" name="checkbox" />
              <p> İstifadəçi şərtləri ilə razıyam</p>
            </div>
            <button type="submit"><span className="btnText">Qeydiyyat</span>
              <div className="spinner">
                <ClipLoader color={'white'} loading={auth.loading} size={20} />
              </div>
            </button>
          </FormStyled>
        </FormContainer>
        <AuthImg>
          <img src={authImg} alt="" />
          <p className="navigate">
            Artıq hesabınız var? <Link to={"/login"}>Daxil olun </Link>
          </p>
        </AuthImg>
      </Wrapper>
    </Container>
  );
};

export default Register;
