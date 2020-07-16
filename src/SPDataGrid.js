import React from 'react';
import data from './SPData.json';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

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
                        <td>{dataEl.totalReturn}</td>
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
                    <Range allowCross={false} 
                            min={min} max={max} value={value}
                            onChange={this.onSliderChange}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Total Return</th>
                                <th>Culmative Returns</th>
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