package com.rcrdev.nameList.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rcrdev.nameList.entities.Name;

@Repository
public interface NameRepository extends JpaRepository<Name, Long>{

}