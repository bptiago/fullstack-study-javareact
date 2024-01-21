// Controller is for managing POST, GET, PUT, DELETE Mappings...
package com.testapp.study.controller;

import com.testapp.study.model.Student;
import com.testapp.study.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //Marks as a REST Controller
@RequestMapping("/student") //Path for request, response, mapping etc.
@CrossOrigin //Fixes CORS policy block
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add") //POST is for saving data into database
    public String addStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
