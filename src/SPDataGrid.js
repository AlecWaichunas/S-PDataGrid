import React from 'react';
import data from './SPData.json';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './SPDataGrid.css';

const Range = createSliderWithTooltip(Slider.Range)

class SPDataGrid extends React.Component {

    constructor(props){
        super(props);
        //set state for data and slider
        this.state = {
            min: 0,
            max: 0,
            value: [0, 0],
            loaded: false
        };
    }

    //reverse the data to put in ascending
    //init data for slider
    componentDidMount(){
        data.reverse();
        var min = data[0].year;
        var max = data[data.length - 1].year;
        this.setState({
            min: min,
            max: max,
            value: [min, max],
            loaded: true
        });
    }

    //render data grid
    //restrict to start year and end yaer
    updateDataGrid(startYear, endYear){
        var culmativeReturn = 0;
        return data.map((dataEl) => {
            //check if year is between range
            if(dataEl.year >= startYear && dataEl.year <= endYear){
                //add to culmative return
                culmativeReturn += parseFloat(dataEl.totalReturn);
                //render data
                return (
                    <tr key={dataEl.year}>
                        <td>{dataEl.year}</td>
                        <td style={ dataEl.totalReturn < 0 ? {color: 'red'} : {}}>{dataEl.totalReturn}</td>
                        <td>{Math.round(culmativeReturn * 100)/100}</td>
                    </tr>
                )
            }else
                return (<tr key={dataEl.year}></tr>)
        });
    }

    //update slider values
    onSliderChange = value => {
        this.setState({ value });
    }

    //draw grid using HTML DOM
    render(){
        const {min, max, value, loaded} = this.state;
        if(loaded)
            return (
                <>
                    <h5 className='text-center'>S&P 500 Total Returns by Year</h5>
                    <Range allowCross={false} 
                            min={min} max={max} value={value}
                            onChange={this.onSliderChange}
                            tipFormatter={value => `${value}`}/>
                    <table className="datagrid table table-hover">
                        <thead>
                            <tr>
                                <th scope='col'>Year</th>
                                <th scope='col'>Total Return</th>
                                <th scope='col'>Culmative Returns</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.updateDataGrid(value[0], value[1])}
                        </tbody>
                    </table>
                </>
            );
        else
            return (<h3>Loading Data...</h3>)
    }

}

export default SPDataGrid;