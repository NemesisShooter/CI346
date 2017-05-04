import React from 'react';
import {render} from 'react-dom';

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
                        <th><center>ID</center></th>
                        <th><center>Last Name</center></th>
                        <th><center>First Name</center></th>
                        <th><center>Shift</center></th>
                        <th><center>Job</center></th>
                        <th><center>Delete employee?</center></th>
                    </tr>
                </thead>
                <tbody>
                    {employeelist}
                </tbody>
            </table>
        );
    }
}

var ButtonController = {
	deleteEmployee: function(id){
        $.ajax({
            method: "DELETE",
            async: false,
            url: "./api/employee/" + id,
        }).done(function(msg) {
        	console.log(msg);
        	render(<FrontEnd />, document.getElementById('target'));
        });
	}
};

class Employee extends React.Component {
    render() {
        return(
            <tr id={"employee-"+this.props.employeeObject['PersonID']}>
            	<td><center>{this.props.employeeObject['PersonID']}</center></td>
                <td><center>{this.props.employeeObject['LastName']}</center></td>
                <td><center>{this.props.employeeObject['FirstName']}</center></td>
                <td><center>{this.props.employeeObject['Shift']}</center></td>
                <td><center>{this.props.employeeObject['Job']}</center></td>
                <td><center><button><a onClick={ButtonController.deleteEmployee.bind(this, this.props.employeeObject['PersonID'])}>Delete</a></button></center></td>
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