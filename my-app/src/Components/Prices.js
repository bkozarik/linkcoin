import React from 'react';
import '../App.css';

const Prices = props => {
  return (
    <section>
        <div className="prices">
            <img className="grad__line" src="./img/gradient-line.png"></img>

            <h2>Our Prices</h2>

            <div className="prices__list">

                <div className="price__item">

                    <span className="sale">50%OFF first month</span>

                    <img src="./img/Price-img-1.png" alt=""/>
                    <p>1 month</p>
                    <span className="prev__price">$29.99/mo</span>
                    <span className="total__price">$15.99/mo</span>
                    <a href="#" className="gradient__btn">select plan</a>
                </div>

                <div className="price__item">

                    <span className="sale"></span>

                    <img src="./img/Price-img-1.png" alt=""/>
                    <p>1 month</p>
                    <span className="prev__price">$29.99/mo</span>
                    <span className="total__price">$15.99/mo</span>
                    <a href="#" className="gradient__btn">select plan</a>
                </div>

                <div className="price__item">

                    <span className="sale">BEST DEAL</span>

                    <img src="./img/Price-img-1.png" alt=""/>
                    <p>1 month</p>
                    <span className="prev__price">$29.99/mo</span>
                    <span className="total__price">$15.99/mo</span>
                    <a href="#" className="gradient__btn">select plan</a>
                </div>

            </div>
        </div>
    </section>
  );
}

export default Prices;
