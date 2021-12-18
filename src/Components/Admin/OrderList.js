import React from 'react';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AdminSidebar from './AdminSidebar';

const OrderList = () => {
    return (
        <div>
        <Header></Header>
        {
            localStorage.getItem('role') === 'admin' ?
                <div>
                    <div className="row">
                        <AdminSidebar></AdminSidebar>
                        <div className="col-9">
                            <h1>Order List</h1>
                        </div>
                    </div>
                </div>
                
                 :
                <Error></Error>
        }
        <Footer></Footer>
    </div>
    );
};

export default OrderList;