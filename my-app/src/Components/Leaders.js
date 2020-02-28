import React from 'react';
import '../App.css';

const Leaders = props => {
  return (
    <section>
        <div className="leaders">
            <h2>Leaders of the month</h2>

            <div className="leader__list">

                <div className="leader__item">
                    <img src="./img/Leader-img.png" alt=""/>
                    <span className="leader__nick">Chivalrou$$</span>
                    <div className="new__clients">
                        <p>256</p>
                        <hr/>
                        <span>new clients</span>
                    </div>
                    <div className="tota__clients">
                        <p>1276</p>
                        <hr/>
                        <span>total clients</span>
                    </div>
                    <span className="leader__total">$ 25,750</span>
                </div>

                <div className="leader__item">
                    <img src="./img/Leader-img.png" alt=""/>
                    <span className="leader__nick">Chivalrou$$</span>
                    <div className="new__clients">
                        <p>256</p>
                        <hr/>
                        <span>new clients</span>
                    </div>
                    <div className="tota__clients">
                        <p>1276</p>
                        <hr/>
                        <span>total clients</span>
                    </div>
                    <span className="leader__total">$ 25,750</span>
                </div>

                <div className="leader__item">
                    <img src="./img/Leader-img.png" alt=""/>
                    <span className="leader__nick">Chivalrou$$</span>
                    <div className="new__clients">
                        <p>256</p>
                        <hr/>
                        <span>new clients</span>
                    </div>
                    <div className="tota__clients">
                        <p>1276</p>
                        <hr/>
                        <span>total clients</span>
                    </div>
                    <span className="leader__total">$ 25,750</span>
                </div>

            </div>
        </div>
    </section>
  );
}

export default Leaders;
