import React from "react";
import Chartbar from './Chartbar'
import './Chart.css'

export default function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value).reduce((a,b) => a+b);
    // const totalMax = dataPointValues.map(val => val).reduce((a,b) => a+b);
    
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <Chartbar
                    key={dataPoint.id}
                    value={dataPoint.value} 
                    maxValue={dataPointValues}
                    label={dataPoint.label}
                />
            )}
        </div>
    )
}