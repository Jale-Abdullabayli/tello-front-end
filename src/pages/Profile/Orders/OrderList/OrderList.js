import React, { useEffect } from 'react';
import './OrderList.scss';
import { useDispatch, useSelector } from 'react-redux';
import OrderInfo from '../OrderInfo/OrderInfo';
// import MoonLoader from "react-spinners/MoonLoader";
import { fetchProductsAsync } from '../../../../redux/actions/productAction';


function OrderList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products.slice(0, 4));

const topSellings={};
    useEffect(() => {
        dispatch(fetchProductsAsync());
        window.scrollTo(0, 0)
    }, []);
    return (
      <>
        {
            topSellings.loading ?
                <div className="spinner">
                    {/* <MoonLoader color={'#2DD06E'} loading={topSellings.loading} size={100} /> */}
                </div> :
                <div className='orderList'>
                    <h4>Sifarişlərim (4 məhsul)</h4>
                    <div className="row">
                        {
                            products?.map(product => <OrderInfo product={product} key={product._id} />)
                        }
                    </div>
                </div>
        }</>

    )
}

export default OrderList