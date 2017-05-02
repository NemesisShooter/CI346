import React from 'react';
import {render} from 'react-dom';

class DeleteButton extends React.Component {
	render() {
		return(
			<a data-tooltip="Delete employee"><i>Delete</i></a>
		);
	}
}

class EmployeeList extends React.Component {
    render() {

    	console.log(this.props);
    	
        var employeelist = Object.values(this.props.employees).map(employeeObject =>
            <Employee employeeObject = {JSON.parse(employeeObject)}/>
        );

        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Shift</th>
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
            	<td>{this.props.employeeObject['PersonID']}</td>
                <td>{this.props.employeeObject['LastName']}</td>
                <td>{this.props.employeeObject['FirstName']}</td>
                <td>{this.props.employeeObject['Shift']}</td>
                <td>{this.props.employeeObject['Job']}</td>
            </tr>
        );
    }
}

class FrontEnd extends React.Component {

    getEmployeeList() {
    	var list = {};
    	
        $.ajax({
            method: "GET",
            async: false,
            url: "./api/employees",
        }).done(function(msg) {
        	console.log(msg);
            list = JSON.parse(msg);
        });
        
        return list;
    }

    render() {
    	console.log(this.state);
    	
        return( 
            <EmployeeList employees = {this.getEmployeeList()} />
        );
    }
}

render(<FrontEnd />, document.getElementById('target'));