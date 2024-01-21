package com.testapp.study.service;

import com.testapp.study.model.Student;
import com.testapp.study.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service //Service class annotation
public class StudentServiceImplementation implements StudentService{

    @Autowired //Will auto-wire StudentRepository to this class
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
