import React from 'react';

class SPDataGrid extends React.Component {

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
                    </tbody>
                </table>
            </>
        );
    }

}

export default SPDataGrid;