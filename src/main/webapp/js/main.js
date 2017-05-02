import React from 'react';
import {render} from 'react-dom';

class EmployeeList extends React.Component {
    render() {
        var employeelist = Object.values(this.props.employees).map(employeeObject =>
            <Employee employeeObject = {JSON.parse(employeeObject)}/>
        );

        return(
            <table>
                <thead>
                    <tr>
                        <th>ID |</th>
                        <th>Last Name |</th>
                        <th>First Name |</th>
                        <th>Shift |</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {employeelist}
                </tbody>
            </table>
        );
    }
}

class Employee extends React.Component {
    render() {
        return(
            <tr id={"employee-"+this.props.employeeObject['PersonID']}>
//            	<td>{this.props.employeeObject['PersonID']}</td>
                <td>{this.props.employeeObject['LastName']}</td>
                <td>{this.props.employeeObject['FirstName']}</td>
                <td>{this.props.employeeObject['Shift']}</td>
                <td>{this.props.employeeObject['Job']}</td>
            </tr>
        );
    }
}

class FrontEnd extends React.Component {

	constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        $.ajax({
            method: "GET",
            async: true,
            url: "./api/employees",
        }).done(function(msg) {
        	
        	console.log(msg);
        	
            this.state = {employees: JSON.parse(msg)};
        });
    }

    render() {
        return( 
            <EmployeeList employees = {this.state.employees} />
        );
    }
}

render(<FrontEnd />, document.getElementById('target'));