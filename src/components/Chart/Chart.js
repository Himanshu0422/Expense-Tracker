import React from "react";
import Chartbar from './Chartbar'
import './Chart.css'

export default function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues)
    
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <Chartbar
                    key={dataPoint.id}
                    value={dataPoint.value} 
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            )}
        </div>
    )
}