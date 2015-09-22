package com.vzw.wallet.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vzw.wallet.model.User;

@RestController("AccountController")
@RequestMapping("/account")
public class AccountController {

	@RequestMapping(value = "/user/{mdn}", method = RequestMethod.GET)
	public User getUser(@PathVariable String mdn){
		User user = new User();
		user.setUsername("Test");
		return user;
	}
}