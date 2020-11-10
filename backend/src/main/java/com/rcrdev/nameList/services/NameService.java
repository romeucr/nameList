package com.rcrdev.nameList.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rcrdev.nameList.entities.Name;
import com.rcrdev.nameList.repositories.NameRepository;

@Service
public class NameService {

	@Autowired 
	NameRepository nameRepository;
	
	
	@Transactional(readOnly = true)
	public Page<Name> findAllPaged(PageRequest pageRequest) {
		Page<Name> nameList = nameRepository.findAll(pageRequest);
		
		System.out.println(nameList);
		
		return nameList;
			
	}
	
	@Transactional(readOnly = true)
	public List<Name> findByName(String name) {
		List<Name> nameList = nameRepository.findByNameLikeIgnoreCase("%"+name+"%");
		
		return nameList;
				
	}
	
	@Transactional(readOnly = true)
	public List<Name> findNameStartsWithLetter(char letter) {
		List<Name> nameList = nameRepository.findByNameStartsWithIgnoreCase(letter);
		
		return nameList;
	}
	
	
}
