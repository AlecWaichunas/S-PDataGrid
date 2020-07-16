import React from 'react';
import data from './SPData.json';

class SPDataGrid extends React.Component {

    //reverse the data to put in ascending
    componentDidMount(){
        data.reverse();
        this.setState({});
    }

    //render data grid
    updateDataGrid(){
        var culmativeReturn = 0;
        return data.map((dataEl) => {
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
                        {this.updateDataGrid()}
                    </tbody>
                </table>
            </>
        );
    }

}

export default SPDataGrid;