package com.eq2.reda.service;

import javax.transaction.Transactional;

import com.eq2.reda.domain.User;
import com.eq2.reda.repository.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RedaService {

    private Logger logger = LoggerFactory.getLogger(RedaService.class);

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void reda() {
        User u1 = User.builder().build();
        u1.setUsername("max");
        u1.setPassword("patate01");
 
        userRepository.save(u1);
    }
}