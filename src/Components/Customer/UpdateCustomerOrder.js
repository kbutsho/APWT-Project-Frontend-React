import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateCustomerOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/getSingleOrder/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id]);
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div>
                <div style={{ width: "400px", background: "gray", padding: "30px", borderRadius: "10px" }}>
                    <form action="http://127.0.0.1:8000/api/updateOrderAPI" method='post'>
                        <h3 className='text-center text-uppercase fw-bold'>Update Order</h3>
                        <input className='my-2 w-100' hidden required type="text" defaultValue={order.id} name="id" />
                      
                        <input className='my-2  w-100' required type="text" defaultValue={order.customerName} name="customerName" />
                        <input className='my-2  w-100' required type="text" defaultValue={order.phone} name="phone" />
                        <input className='my-2  w-100' required type="text" defaultValue={order.Address} name="Address" />
                        
                        <button className='my-2  w-25 btn btn-success btn-sm' type="submit"  >Update</button>
                        <Link className='btn btn-sm btn-danger px-3 mx-5' to="/dashboard">Back </Link>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateCustomerOrder;