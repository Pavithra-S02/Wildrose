package com.example.wildrose;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WildroseApplication {

	public static void main(String[] args) {

		SpringApplication.run(WildroseApplication.class, args);
		System.out.print("appointment is working");
	}

}
