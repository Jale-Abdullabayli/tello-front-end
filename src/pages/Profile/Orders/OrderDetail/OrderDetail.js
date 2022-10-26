import React, { useEffect } from 'react';
import './OrderDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync } from '../../../../redux/actions/productAction';

import backIcon from '../../../../assets/images/backIcon.svg';
import { Link } from 'react-router-dom';
import cardIcon from '../../../../assets/images/cardIcon.svg';
import aznSymbol from '../../../../assets/images/aznSymbol.svg';
// import MoonLoader from "react-spinners/MoonLoader";


function OrderDetail() {

    const dispatch = useDispatch();
    let orderDetail = useSelector(state => {
        return state.productByIdReducer.product;
    });
    useEffect(() => {
        dispatch(fetchProductByIdAsync('6350374ae5bc084e06871ea6'));
        window.scrollTo(0, 0);
    }, []);
    return (

        <>
        {
             false?
             <div className="spinner">
                 {/* <MoonLoader color={'#2DD06E'} loading={orderDetail.loading} size={100} /> */}
             </div> :
             <div className='orderDetail'>
             <Link to='/profile/order-list' className='back'>
                 <img src={backIcon} alt="backIcon" />
                 <span>Sifarişin detalları</span>
             </Link>
             <div className="orderDetailMain">
                 <div className="productDetail">
                     <img src={orderDetail?.imageCover} alt="productImg" />
                     <div className="productInfo">
                         <h3 className="name">iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden  5 G 8690604083886 0212042</h3>
                         <div className="row">
                             <div className="col-3">
                                 <div className="property">
                                     <div className="key">Rəng:</div>
                                     <div className="value">Sarı</div>
                                 </div>
                                 <div className="property">
                                     <div className="key">Sifariş tarixi:</div>
                                     <div className="value">12.04.2020</div>
                                 </div>
                             </div>
                             <div className="col-3">
                                 <div className="property">
                                     <div className="key">Yaddaş:</div>
                                     <div className="value">128 GB</div>
                                 </div>
                                 <div className="property">
                                     <div className="key">Status:</div>
                                     <div className="value">Yoldadır</div>
                                 </div>
                             </div>
                             <div className="col-3">
                                 <div className="property">
                                     <div className="key">Say:</div>
                                     <div className="value">3</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
 
                 <div className="delivery">
                     <div className="row">
                         <div className="col-md-4 infoCol">
                             <h4>Şəxsi məlumatlar</h4>
                             <div className="deliveryInfo">
                                 <span>Gunel</span>
                                 <span>Mammadova</span>
                                 <span>+994 77 566 73 27</span>
                                 <span>ulvinomerov1@gmail.com</span>
                             </div>
                         </div>
 
                         <div className="col-md-6 infoCol">
                             <h4>Çatdırılma ünvanı</h4>
                             <div className="deliveryInfo">
                                 <span>Bakı şəhəri</span>
                                 <span>Nərimanov rayonu</span>
                                 <span>Atatürk pr. 19, İnnoland İnkubasiya Mərkəzi</span>
                                 <span>Egov, Giriş 2</span>
                             </div>
                         </div>
 
                         <div className="col-md-2 editCol">
                             <span>Düzəliş et</span>
                         </div>
 
 
                     </div>
                 </div>
 
                 <div className="payment">
                     <h4>Ödəmə detalları</h4>
                     <div className="paymentDetail">
                         <div className="property">
                             <div className="key">Ödəmə metodu</div>
                             <div className="value withCard">
                                 <img src={cardIcon} alt="withCard" />
                                 Kart ilə</div>
                         </div>
                         <div className="property">
                             <div className="key">Toplam məbləğ</div>
                             <div className="value price">
                                 <span>1640</span>
                                 <img src={aznSymbol} alt="aznSymbol" />
                             </div>
                         </div>
                         <div className="property">
                             <div className="key">Təcili çatdırılma</div>
                             <div className="value price">
                                 <span>5</span>
                                 <img src={aznSymbol} alt="aznSymbol" />
                             </div>
                         </div>
                         <div className="property">
                             <div className="key">Promo kod</div>
                             <div className="value price">
                                 <span>-60</span>
                                 <img src={aznSymbol} alt="aznSymbol" />
                             </div>
                         </div>
                         <div className="sum">
                             <div className="key">Cəmi</div>
                             <div className="value sumPrice">
                                 <span>1580</span>
                                 <img src={aznSymbol} alt="aznSymbol" />
                             </div>
                         </div>
                         <div className="rateProduct">
                             <button>Məhsulu dəyərləndir</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        }
        </>
        
    )
}

export default OrderDetail