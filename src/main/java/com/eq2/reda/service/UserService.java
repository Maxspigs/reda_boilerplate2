package com.eq2.reda.service;

import com.eq2.reda.domain.User;
import com.eq2.reda.repository.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public User findById(long id) {
        return userRepository.findById(id);
    }

    public HttpStatus createUser(User user){
        User mUser = null;
        try {
            mUser = userRepository.save(user);
            logger.info(user.toString());
            logger.info(mUser.toString());
        } catch (Exception e) {
            return HttpStatus.BAD_REQUEST;
        }
        return mUser.getId() >= 0 ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
    }

}