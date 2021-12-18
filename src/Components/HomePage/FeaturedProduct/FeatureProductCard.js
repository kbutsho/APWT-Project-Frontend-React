import React from 'react';
import './FeatureProductCard.css';

const FeatureProductCard = (props) => {
    const { name, price, category, quantity, sellerName , image} = props.product;
    return (
        <div className="col-3" style={{ }}>
            <div className="card-group">
                <div className="card">
                    <img src={image} height="200" width="200" alt="" className="card-img-top" />
                    <div class="card-body">
                        <div class="d-flex">
                            <h5 class="card-title text-primary">{name}</h5>
                            <h6 class="card-title ms-auto mt-1">{category}</h6>
                        </div>
                        <span></span>
                        <div class="d-flex">
                            <p class="card-text"><small class="text-danger fw-bold">Price:
                                {price}</small></p>
                            <p class="card-text  ms-auto"><small class="text-muted">Available:
                                {quantity}</small></p>
                        </div>
                        <div class="d-flex">
                            <p>Author: {sellerName}</p>
                            <div class="ms-auto">
                                {/* <a class="btn btn-primary btn-sm ms-auto" href="/">Buy
                                    Now</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureProductCard;