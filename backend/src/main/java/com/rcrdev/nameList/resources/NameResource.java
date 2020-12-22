package com.rcrdev.nameList.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rcrdev.nameList.dto.NameDTO;
import com.rcrdev.nameList.services.NameService;

@RestController
@RequestMapping(value = "/names")
public class NameResource {
	
	@Autowired
	private NameService nameService;
	
	@GetMapping(value = "/search")
	public ResponseEntity<Page<NameDTO>> findName(
			@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "size", defaultValue = "15") Integer size,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy) {

		PageRequest pageRequest = PageRequest.of(page, size, Direction.valueOf(direction), orderBy);
		Page<NameDTO> list = nameService.searchName(name.trim(), pageRequest); //trim para remover espaços em branco antes de depois do string
		return ResponseEntity.ok().body(list);
	}
	
}
