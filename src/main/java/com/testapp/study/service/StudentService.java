// Service is for business rules
package com.testapp.study.service;

import com.testapp.study.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
