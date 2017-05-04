package com.michaelsimionidi.ci346;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@ComponentScan(basePackages = "com.michaelsimionidi")
@SpringBootApplication
public class WhatEverYouWant extends SpringBootServletInitializer {
	
	private static Class applicationClass = WhatEverYouWant.class;
	
	public static void main(String[] args)
	{
		SpringApplication.run(WhatEverYouWant.class, args);
	}
}
