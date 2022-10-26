import React, { useState, useEffect } from "react";
import authImg from "../../assets/images/forgetPassword.svg";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { signup } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import axios from '../../api/index';
import { toast } from 'react-toastify';


import * as api from '../../api/auth';

import {
    Container,
    Wrapper,
    FormContainer,
    FormStyled,
    AuthImg,
} from "./ForgetPasswordStyle";
import { Link } from "react-router-dom";



const ForgetPassword = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await api.forgetPassword(e.target[0].value);
            setLoading(false);
            toast.success('E - poçt ünvanınızı yoxlayın. Göndərilmiş linkə keçid edib şifrənizi yeniləyin!');
           
        } catch (error) {
            setLoading(false);
            toast.error(error.response.data.message);
        }
    }

    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <div className="title"> <h2>Şifrəmi unutdum</h2>
                        <p>Doğrulama kodunu almaq üçün e - poçt ünvanınızı daxil edin</p></div>

                    <FormStyled onSubmit={submit}>
                        <div>
                            <label>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="nümunə@gmail.com"
                            />
                        </div>

                        <button type="submit"><span className="btnText">Göndər</span>
                            <div className="spinner">
                                <ClipLoader color={'white'} loading={loading} size={20} />
                            </div>
                        </button>
                    </FormStyled>
                </FormContainer>
                <AuthImg>
                    <img src={authImg} alt="" />

                </AuthImg>
            </Wrapper>
        </Container>
    );
};

export default ForgetPassword;
