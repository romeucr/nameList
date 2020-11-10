package com.rcrdev.nameList.dto;

import java.io.Serializable;

import com.rcrdev.nameList.entities.Country;

public class CountryDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	public CountryDTO () {
	}

	public CountryDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public CountryDTO(Country entity) {
		this.id = entity.getId();
		this.name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
