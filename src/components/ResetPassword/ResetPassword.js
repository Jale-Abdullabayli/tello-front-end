import React, { useState, useEffect } from "react";
import authImg from "../../assets/images/resetPassword.svg";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { signup } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";


import {
    Container,
    Wrapper,
    FormContainer,
    FormStyled,
    AuthImg,
} from "./ResetPasswordStyle";
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom'

import * as api from '../../api/auth';


const ResetPassword = () => {

    const { passwordToken } = useParams();
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const newPassword = { password: e.target[0].value, passwordConfirm: e.target[1].value };
            const response = await api.resetPassword(newPassword, passwordToken);
            setLoading(false);
            toast.success('Şifrə yeniləndi');
            navigate("/login", { replace: true });
        } catch (error) {
            setLoading(false);
            toast.error(error.response.data.message);
        }
    }

    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <div className="title"> <h2>Şifrəni yenilə</h2>
                        <p>Hesabınıza yeni şifrə təyin edin</p></div>

                    <FormStyled onSubmit={submit}>
                        <div>
                            <label>Yeni Şifrə</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Yeni şifrənizi daxil edin"
                            />
                        </div>

                        <div>
                            <label>Yeni Şifrə təkrarı</label>
                            <input
                                type="password"
                                name="passwordConfirm"
                                id="passwordConfirm"
                                placeholder="Yeni şifrənizi təkrar daxil edin"
                            />
                        </div>
                        <button type="submit"><span className="btnText">Göndər</span>
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

export default ResetPassword;
