import React from 'react';
import data from './SPData.json';

class SPDataGrid extends React.Component {

    updateDataGrid(){
        return data.map((dataEl) => {
            return (
                <tr>
                    <td>{dataEl.year}</td>
                    <td>{dataEl.totalReturn}</td>
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