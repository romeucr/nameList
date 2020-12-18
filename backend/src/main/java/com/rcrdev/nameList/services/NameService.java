package com.rcrdev.nameList.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rcrdev.nameList.dto.NameDTO;
import com.rcrdev.nameList.entities.Name;
import com.rcrdev.nameList.repositories.NameRepository;

@Service
public class NameService {

	@Autowired 
	NameRepository nameRepository;
	@Transactional(readOnly = true)
	public Page<NameDTO> searchName(String name, Pageable pageable) { 
		Page<Name> page = nameRepository.searchName(name, pageable);
		return page.map(x -> new NameDTO(x));
	}

}
