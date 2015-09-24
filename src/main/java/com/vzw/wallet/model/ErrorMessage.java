package com.vzw.wallet.model;

import java.util.List;

import javax.persistence.Entity;

@Entity
public class ErrorMessage {
	
	private List<VzFieldError> errors;

	public List<VzFieldError> getErrors() {
		return errors;
	}

	public void setErrors(List<VzFieldError> errors) {
		this.errors = errors;
	}
}
