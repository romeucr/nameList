package com.rcrdev.nameList.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rcrdev.nameList.dto.NameDTO;
import com.rcrdev.nameList.entities.Name;
import com.rcrdev.nameList.repositories.NameRepository;
import com.rcrdev.nameList.services.exceptions.ResourceNotFoundException;

@Service
public class NameService {

	@Autowired 
	NameRepository nameRepository;
	
	
	@Transactional(readOnly = true)
	public Page<NameDTO> findAllPaged(PageRequest pageRequest) {
		Page<Name> nameList = nameRepository.findAll(pageRequest);
				
		return nameList.map(x -> new NameDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<NameDTO> findByName(String name) {
		List<Name> nameList = nameRepository.findByNameLikeIgnoreCase("%"+name+"%");
			
		if (nameList.size() == 0) {
			throw new ResourceNotFoundException("Name not found on database");
		}
		
		return nameList.stream().map(obj -> new NameDTO(obj)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public List<NameDTO> findNameStartsWithLetter(char letter) {
		
			List<Name> nameList;
			try {
				nameList = nameRepository.findByNameStartsWithIgnoreCase(letter);
			} catch (IllegalArgumentException e) {
				throw new IllegalArgumentException();

			}			
			
			
			if (nameList.size() == 0) {
				throw new ResourceNotFoundException("Name not found on database");
			}
			
			return nameList.stream().map(obj -> new NameDTO(obj)).collect(Collectors.toList());
	
	
	}
}
