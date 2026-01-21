package com.example.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.entity.Student;
import com.example.backend.repository.StudentRepository;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;

	@PostMapping
	public Student saveStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}

	@GetMapping
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
}
