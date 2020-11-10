package com.rcrdev.nameList.dto;

import java.io.Serializable;

import com.rcrdev.nameList.entities.Name;

public class NameDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	

	private Long id;
	private String name;
	private CountryDTO origin;
	private String meaning;
	private String gender;
	
	public NameDTO() {
	}

	public NameDTO(Long id, String name, CountryDTO origin, String meaning, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.origin = origin;
		this.meaning = meaning;
		this.gender = gender;
	}
	
	public NameDTO(Name entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
		this.origin = new CountryDTO(entity.getOrigin());
		this.meaning = entity.getMeaning();
		this.gender = entity.getGender();
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

	public CountryDTO getOrigin() {
		return origin;
	}

	public void setOrigin(CountryDTO origin) {
		this.origin = origin;
	}

	public String getMeaning() {
		return meaning;
	}

	public void setMeaning(String meaning) {
		this.meaning = meaning;
	}
	
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NameDTO other = (NameDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
}
