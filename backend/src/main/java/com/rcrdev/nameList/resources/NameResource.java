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
	
	/* NOT IMPLEMENTED ON FRONT END
	 * @GetMapping public ResponseEntity<Page<NameDTO>> findAll(
	 * 
	 * @RequestParam(value = "page", defaultValue = "0") Integer page,
	 * 
	 * @RequestParam(value = "linesPerPage", defaultValue = "15") Integer
	 * linesPerPage,
	 * 
	 * @RequestParam(value = "direction", defaultValue = "ASC") String direction,
	 * 
	 * @RequestParam(value = "orderBy", defaultValue = "name") String orderBy) {
	 * PageRequest pageRequest = PageRequest.of(page, linesPerPage,
	 * Direction.valueOf(direction), orderBy); Page<NameDTO> nameList =
	 * nameService.findAllPaged(pageRequest); return
	 * ResponseEntity.ok().body(nameList); }
	 * 
	 * @GetMapping(value = "/{name}") public ResponseEntity<?>
	 * findByName(@PathVariable String name) { List<NameDTO> nameList =
	 * nameService.findByName(name); return ResponseEntity.ok().body(nameList); }
	 * 
	 * @GetMapping(value = "/letter/{letter}") public ResponseEntity<?>
	 * findNameStartsWithLetter(@PathVariable char letter) { List<NameDTO> nameList
	 * = nameService.findNameStartsWithLetter(letter); return
	 * ResponseEntity.ok().body(nameList); }
	 */
	
	@GetMapping(value = "/search")
	public ResponseEntity<Page<NameDTO>> findName(
			@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "size", defaultValue = "5") Integer size,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy) {

		PageRequest pageRequest = PageRequest.of(page, size, Direction.valueOf(direction), orderBy);
		Page<NameDTO> list = nameService.findName(name, pageRequest);
		return ResponseEntity.ok().body(list);
	}

}
