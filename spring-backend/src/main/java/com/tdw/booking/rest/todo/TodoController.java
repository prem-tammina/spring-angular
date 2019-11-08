package com.tdw.booking.rest.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {

	@Autowired
	private TodoHardCodeService todoService;

	@GetMapping(path = "/todos/{username}")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.getAllTodos();
	}
}
