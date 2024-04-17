import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.date} </td>
                                <td>
                                    <button
                                        style={{ margin: '5px', background: "none", color:"black"  }}
                                        onClick={() => handleEdit(employee.id)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td >
                                    <button
                                        style={{ margin: '5px', background: "none", color:"black"  }}
                                        onClick={() => handleDelete(employee.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List