import React, { useState, useEffect } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import authImg from "../../assets/icons/authImg.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

import {
  Container,
  Wrapper,
  FormContainer,
  Icons,
  FormStyled,
  AuthImg,
} from "./LoginStyle";
import { toast } from 'react-toastify';
import { signin } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const formInit = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: ""
}

const LoginForm = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState(formInit);

  const auth = useSelector(state => state.authReducer);

  const dispatch = useDispatch()


  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(signin(formData));

    } catch (err) {
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    if (!auth.loading) {
      if (auth.error) {
        toast.error(auth.error);
      }
      if (auth.profile) {
        toast.success('Hesaba daxil olundu');
        navigate("/profile/order-list", { replace: true });
      }
    }

  }, [auth]);

  return (
    <Container>

      <Wrapper>
        <FormContainer>
          <h2>Daxil ol</h2>

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
          <FormStyled onSubmit={login}>
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
                placeholder="***********"
              />
            </div>
            <div className="forgetPassword"><Link to='/forgetPassword'>Şifrəni unutmusunuz?</Link></div>
            <button><span className="btnText">Daxil ol </span>  <div className="spinner">
              <ClipLoader color={'white'} loading={auth.loading} size={20} />
            </div></button>
          </FormStyled>
        </FormContainer>
        <AuthImg>
          <img src={authImg} alt="" />
          <p>
            Hesabınız yoxdur? <Link to={"/register"}>Qeydiyyatdan keçin</Link>
          </p>
        </AuthImg>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
