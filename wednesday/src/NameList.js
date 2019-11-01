import React from 'react';

const NameList = ({ nameList }) => {
    return (
        <React.Fragment>
            <h1>Persons</h1>
            <table>
                <tbody>
                    {nameList.map(name => (
                        <tr><td>{name.name}</td></tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
};

export default NameList;