package com.vzw.wallet.services;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vzw.wallet.model.Response;
import com.vzw.wallet.model.User;
import com.vzw.wallet.repo.UserDao;
import com.vzw.wallet.util.Constants;
import com.vzw.wallet.util.Utils;

@Service("UserService")
public class UserService {
	
	@Autowired
	UserDao userDao;
	
	@Autowired 
	private HttpSession httpSession;
	
	@Autowired 
	private Utils utils;

	@Transactional
	public Response getUserByMdn(String mdn){
		Response response = new Response();
		
		try {
			User user = this.userDao.getUserByMdn(mdn);
			
			if(user == null) {
				response.setErrorCode(Constants.ERROR_CODE_NOT_REGISTERED);
				response.setErrorMessage(this.utils.getMessage("ERROR_CODE_NOT_REGISTERED"));
			}
			else {
				response.setErrorCode(Constants.ERROR_CODE_SUCCESS);
				response.setErrorMessage(this.utils.getMessage("ERROR_CODE_SUCCESS"));
				response.setUser(user);
			}
		} 
		catch(Exception e) {
			e.printStackTrace();
		}

		return response;
	}
	
	@Transactional
	public Response createUser(User user){
		Response response = new Response();
		
		try {
			user.setVzwUser(user.getMdn().startsWith("9"));
			this.userDao.insertUser(user);
			response.setErrorCode(Constants.ERROR_CODE_SUCCESS);
			response.setErrorMessage(this.utils.getMessage("ERROR_CODE_SUCCESS"));
			response.setUser(user);
			this.httpSession.setAttribute(Constants.CURRENT_LOGGED_IN_USER, user);
		}
		catch(Exception e){
			response.setErrorCode(Constants.ERROR_CODE_UNABLE_REGISTERED);
			response.setErrorMessage(this.utils.getMessage("ERROR_CODE_UNABLE_REGISTERED"));
		}
		
		return response;
	}
	
	@Transactional
	public Response loginUser(User userParam){
		Response response = new Response();
		User user = this.userDao.getUserByMdn(userParam.getMdn());
		
		if(user == null) {
			response.setErrorCode(Constants.ERROR_CODE_NOT_REGISTERED);
			response.setErrorMessage(this.utils.getMessage("ERROR_CODE_NOT_REGISTERED"));
		}
		else {
			System.out.println(user.getPassword() + ", " + userParam.getPassword());
			if(user.getPassword().equals(userParam.getPassword())) {
				response.setErrorCode(Constants.ERROR_CODE_SUCCESS);
				response.setErrorMessage(this.utils.getMessage("ERROR_CODE_SUCCESS"));
				response.setUser(user);
				this.httpSession.setAttribute(Constants.CURRENT_LOGGED_IN_USER, user);
			}
			else {
				response.setErrorCode(Constants.ERROR_CODE_NOT_LOGGED_IN);
				response.setErrorMessage(this.utils.getMessage("ERROR_CODE_NOT_LOGGED_IN"));
			}
		}
				
		return response;
	}
	
	public Response getLoggedInUser(){
		Response response = new Response();
		User user = (User) this.httpSession.getAttribute(Constants.CURRENT_LOGGED_IN_USER);
		
		if(user == null) {
			response.setErrorCode(Constants.ERROR_CODE_NOT_LOGGED_IN);
			response.setErrorMessage(this.utils.getMessage("ERROR_CODE_NOT_LOGGED_IN"));
		}
		else {
			response.setErrorCode(Constants.ERROR_CODE_SUCCESS);
			response.setErrorMessage(this.utils.getMessage("ERROR_CODE_SUCCESS"));
			response.setUser(user);
		}
				
		return response;
	}
	
	public Response logoutUser(){
		Response response = new Response();
		this.httpSession.invalidate();
		response.setErrorCode(Constants.ERROR_CODE_SUCCESS);
		response.setErrorMessage(this.utils.getMessage("ERROR_CODE_NOT_LOGGED_IN"));		
		return response;
	}
}
