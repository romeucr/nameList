package com.rcrdev.nameList.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rcrdev.nameList.entities.Name;

@Repository
public interface NameRepository extends JpaRepository<Name, Long>{

	/* NOT IMPLEMENTED ON FRONT END
	 * List<Name> findByNameLikeIgnoreCase(String name); List<Name>
	 * findByNameStartsWithIgnoreCase(char letter);
	 */

	@Query("SELECT obj FROM Name obj WHERE "
			+ "(LOWER(obj.name) LIKE :name)")
	Page<Name> findNameIgnoreCase(String name, Pageable pageable); //o ultimo argumento Pageable é o que contem as informacoes de paginacao 

}