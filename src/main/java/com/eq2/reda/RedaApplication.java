package com.eq2.reda;

import com.eq2.reda.service.RedaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RedaApplication implements CommandLineRunner {

	@Autowired
	RedaService redaService;

	public static void main(String[] args) {
		SpringApplication.run(RedaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		redaService.reda();
	}
}
