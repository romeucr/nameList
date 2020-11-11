package com.rcrdev.nameList.services.exceptions;

public class ResourceNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String msg) {
		super(msg);
	}

	//MethodArgumentTypeMismatchException
	//IllegalArgumentException
}
