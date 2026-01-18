package com.example.docker_demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DockerController {

    @GetMapping("/demo")
    public String hello() {
    	return "Spring Boot application is running successfully inside Docker!";
    }
}