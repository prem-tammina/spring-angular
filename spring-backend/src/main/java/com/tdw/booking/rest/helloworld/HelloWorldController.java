package com.tdw.booking.rest.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	@RequestMapping(method = RequestMethod.GET, path = "/")
	public String getHome() {
		return "Home";
	}

	@GetMapping(path = "/hello-world")
	public String getHelloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean getHelloWorldBean() throws Exception {
		// throw new Exception(" Not found ");
		return new HelloWorldBean("Default");
	}

	@GetMapping(path = "/hello-world-bean/{name}")
	public HelloWorldBean getHelloWorldBeanWithName(@PathVariable String name) {
		return new HelloWorldBean(name);
	}

}
