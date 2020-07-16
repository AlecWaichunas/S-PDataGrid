import React from 'react';
import data from './SPData.json';

class SPDataGrid extends React.Component {

    //reverse the data to put in ascending
    componentDidMount(){
        data.reverse();
        this.setState({});
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

    //draw grid using HTML DOM
    render(){
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Total Return</th>
                            <th>Culmative Returns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.updateDataGrid(2000, 2005)}
                    </tbody>
                </table>
            </>
        );
    }

}

export default SPDataGrid;