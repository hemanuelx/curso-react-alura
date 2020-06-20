import React, { Component } from "react";

const TableHead = () => {
    return (<thead>
        <tr>
            <th>Authors</th>
            <th>Books</th>
            <th>Prices</th>
            <th>Remove </th>
        </tr>
        </thead>);
}

const TableBody = props => {
    const lines = props.authors.map((line, index) => {
        return (
            <tr key={index}>
                <td>{line.name}</td>
                <td>{line.book}</td>
                <td>{line.price}</td>
                <td><button onClick={ () => { props.removeAuthor(index) } }>Remove</button></td>
            </tr>

        );
    });
    return (
        <tbody>
            {lines}
        </tbody>
    );
}
class Table extends Component {
    render(){
        const { authors, removeAuthor } = this.props;

        return (
            <table className="centered highlight">
            <TableHead />
            <TableBody authors={ authors } removeAuthor ={removeAuthor} 
                    className="waves-effect waves-light indigo lighten-2 btn"></TableBody>
            
            </table>
        )
    }
}
export default Table