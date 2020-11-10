package com.rcrdev.nameList.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rcrdev.nameList.entities.Name;

@Repository
public interface NameRepository extends JpaRepository<Name, Long>{

	List<Name> findByNameLikeIgnoreCase(String name);
	List<Name> findByNameStartsWithIgnoreCase(char letter);
	

}