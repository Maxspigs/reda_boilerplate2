package com.eq2.reda.repository;

import com.eq2.reda.domain.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findById(long id);

}