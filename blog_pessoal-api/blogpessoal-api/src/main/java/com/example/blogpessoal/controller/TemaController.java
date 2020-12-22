package com.example.blogpessoal.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.blogpessoal.model.Tema;
import com.example.blogpessoal.repository.TemaRepository;

import io.swagger.annotations.Api;

@RestController
@CrossOrigin(origins = "*",  allowedHeaders = "*")
@RequestMapping("/tema")
@Api(value="API REST Tema")
public class TemaController {
	
	//responsabilidade de intanciar fica com o spring
	@Autowired
	private TemaRepository repository;
	
	//findAll trazer todas as informações 
	@GetMapping
	public ResponseEntity<List<Tema>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	//findById trazer uma única informação
	@GetMapping("/{id}")
	public ResponseEntity<Tema> getById(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	//getByTitulo trazer informação por nome	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Tema>> getByName(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByDescricaoContainingIgnoreCase(nome));
	}
	
	//end-point post para inserir novos dados
	@PostMapping
	public ResponseEntity<Tema> post(@RequestBody Tema tema){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(tema));
	}
	
	//end-point put para atualizar dados
	@PutMapping
	public ResponseEntity<Tema> put(@RequestBody Tema tema){
		return ResponseEntity.ok(repository.save(tema));
	}
	
	//end-point delete para excluir dados
	@DeleteMapping("/{id}")
	public  void delete(@PathVariable long id) {repository.deleteById(id);}
}
