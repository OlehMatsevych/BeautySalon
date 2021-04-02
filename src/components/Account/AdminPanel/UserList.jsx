
import React, { Component } from 'react';
import { MDBDataTableV5 } from 'mdbreact';

import { db } from '../../../firebase_config/config';

var dataset = []

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                customerid: '', 
                date:'', 
                time: '', 
                employee: '',
                procedure: '',
                orderlist1: [],
                dodList: []
            }
        }

        this.state.user.orderlist1.push({
            "customerid":"532QAABpbpmo23oDxAEe",
            "date":"20.04.2021",
            "time":"10:20",
            "procedure":"манікюр",
            "employee": "Оксана Бойко"
        })
    }
    componentDidMount() {       //примусова функція
        this._loadOrderlist();
    }
     arr = []
    _loadOrderlist = () => {

        db.collection('orders').get().then(
            (QuerySnapshot) => {
                QuerySnapshot.forEach((doc) => {
                    this.setState({
                        customerid: doc.id,
                        date: doc.data().date, 
                        time: doc.data().time, 
                        procedure: doc.data().procedure,
                        employee: doc.data().employee
                       
                    })
                    this.setState({
                        dodList: {
                        'customerid': doc.id, 
                        'date': doc.data().date, 
                        'time': doc.data().time, 
                        'procedure': doc.data().procedure,
                        'employee': doc.data().employee
                    }})
                    
                   this.state.user.orderlist1.push(
                        {
                        'customerid': doc.id, 
                        'date': doc.data().date, 
                        'time': doc.data().time, 
                        'procedure': doc.data().procedure,
                        'employee': doc.data().employee}
                    )
                })
            }
        )
        // примусова функція чекати, поки весь масив буде завантажений 
    }

    render() {
        return (
            <div>
                <Pagination data={this.state.user.orderlist1}/>
            </div>
        );
    }
}
export default UserList

const Pagination= (props) => {
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'ID',
                field: 'customerid',
                width: 270,
            },
            {
                label: 'Дата',
                field: 'date',
                width: 270,
            },
            {
                label: 'Час',
                field: 'time',
                width: 270,
            },

            {
                label: 'Процедури',
                field: 'procedure',
                sort: 'asc',
                width: 100,
            },

            {
                label: 'Майстер',
                field: 'employee',
                width: 100,
            },
        ],
        rows: props.data
    });

    console.log('********************************')
    console.log(datatable.rows)
    console.log('********************************')
    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />;
}
