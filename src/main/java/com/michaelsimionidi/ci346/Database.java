package com.michaelsimionidi.ci346;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

public class Database
{
	//Creates a connection to the database for the session
	
	public Database() throws Exception {
		try {  
			Class.forName("com.mysql.jdbc.Driver");

			Connection databaseConnection = DriverManager.getConnection("jdbc:mysql://localhost:3300/employees","root","usbw");
			Statement dbStatement = databaseConnection.createStatement();  
			ResultSet dbResults = dbStatement.executeQuery("SELECT * FROM employees");
			
			while(dbResults.next()) {
				System.out.println(dbResults.getInt(1) + "  " + dbResults.getString(2) + "  " + dbResults.getString(3) + "  " + dbResults.getString(4) + "  " + dbResults.getString(5));  
			}
			
			databaseConnection.close();
		}
		catch(Exception e) {
			// Pass the exception up for handling in the application.
			throw e;
		}
	}
	
	public ResultSet execute(String sql) throws Exception 
	{
		try 
		{
			Connection databaseConnection = DriverManager.getConnection("jdbc:mysql://localhost:3300/employees","root","usbw");
			Statement dbStatement = databaseConnection.createStatement();  
			ResultSet dbResults = dbStatement.executeQuery(sql);

			return dbResults;
		}
		catch(Exception e) {
			throw e;
		}
		
	}
}