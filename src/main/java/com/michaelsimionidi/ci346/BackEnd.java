package com.michaelsimionidi.ci346;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BackEnd {

	@RequestMapping("/api")
	public String Index() {
		return "{}";
	}
	
	@RequestMapping(value = "/api/employees", method= RequestMethod.GET)
	public String GETIndex() {
		return "hi";
	}
	@RequestMapping(value = "/api/employees/{id}", method= RequestMethod.POST)
	public String POSTIndex() {
		return "hi";
	}
	@RequestMapping(value = "/api/employees", method= RequestMethod.PUT)
	public String PUTIndex() {
		return "hi";
	}
	@RequestMapping(value = "/api/employee/{id}", method= RequestMethod.DELETE, produces = "plain/text")
	public String DELETEIndex() {
		return "hi";
	}
	
}