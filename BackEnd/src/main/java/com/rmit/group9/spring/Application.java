package com.rmit.group9.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.rmit.group9.spring.utilities.DatabaseAccess;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

		DatabaseAccess db = new DatabaseAccess();
		db.getTable();
	}

}
