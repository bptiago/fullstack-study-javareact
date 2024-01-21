// Repository is for JPA implementation
package com.testapp.study.repository;

import com.testapp.study.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Repository annotation
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
