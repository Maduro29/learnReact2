import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react';
import { fetchAllUsers } from '../services/userService';


const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let res = await fetchAllUsers();
        if (res && res.data) {
            setListUsers(res.data);
        }

        console.log(res.data.data);
    }

    console.log(listUsers);
    return (
        <><Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tr key={`user-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </Table></>
    )
}

export default TableUsers;