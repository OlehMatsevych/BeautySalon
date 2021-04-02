
import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import data from '../../../data/employes.js'

const EmployeeList = () => {
    return (
        <div>
            <Pagination />
        </div>
    )
}

export default EmployeeList

const Pagination= () => {
    let [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: "Ім'я",
                field: 'name',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Прізвище',
                field: 'sur',
                sort: 'disabled',
                width: 270,
            },
            
            {
                label: 'Вік',
                field: 'age',
                sort: 'disabled',
                width: 100,
            },
        ],
        rows:data

    });
    console.log(datatable)

    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />;
    
}