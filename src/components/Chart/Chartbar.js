import React from "react";
import './Chartbar.css';

const Chartbar = props => {

    let barheight = '0%';
    if(props.maxValue > 0){
        barheight = Math.round((props.value/ props.maxValue) * 100) + '%';
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barheight}}>

                </div>
                <div className="chart-bar__label">
                    {props.lebel}
                </div>
            </div>
        </div>
    )
};

export default Chartbar;