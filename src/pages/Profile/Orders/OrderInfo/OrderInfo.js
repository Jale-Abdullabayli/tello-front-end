import React from 'react';
import './OrderInfo.scss';
import aznSymbol from '../../../../assets/images/aznSymbol.svg';
import { Link } from 'react-router-dom';


function OrderInfo({ product }) {
    return (
        <div className="col-md-6">
            <div className='orderInfo'>
                <div className="row">
                    <div className="col-md-5">
                        <img className='productImg' src={product.imageCover} alt="productImg" />
                    </div>
                    <div className="col-md-7">
                        <div className="properties">
                            <div className="property">
                                <span>Sifariş tarixi:</span>
                                <h5>12.04.2020</h5>
                            </div>
                            <div className="property">
                                <span>Status:</span>
                                <h5 className='status'>Yoldadır</h5>
                            </div>
                            <div className="property">
                                <span>Ümumi məbləğ:</span>
                                <div className="price">{product.price} <img src={aznSymbol} alt="azn" /></div>
                            </div>
                        </div>
                        <Link to='/profile/order-detail' className='detail'>Sifarişin detalları</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderInfo