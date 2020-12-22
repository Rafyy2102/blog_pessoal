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
import com.example.blogpessoal.model.Postagem;
import com.example.blogpessoal.repository.PostagemRepository;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value="/postagens")
public class PostagemController {
	
	//responsabilidade de instanciar fica com o spring
	@Autowired
	private PostagemRepository repository;
	
	//findAll trazer todas as informações 
	@GetMapping
	public ResponseEntity<List<Postagem>>GetAll(){		
		return ResponseEntity.ok(repository.findAll());
	}
	
	//findById trazer uma única informação
	@GetMapping("/{id}")
	public ResponseEntity<Postagem> GetById(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	//getByTitulo trazer informação por titulo
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Postagem>> GetByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
	}
	
	//end-point post para inserir novos dados
	@PostMapping
	public ResponseEntity<Postagem> post(@RequestBody Postagem postagem){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(postagem));
	}	
	
	//end-point put para atualizar dados
	@PutMapping
	public ResponseEntity<Postagem> put (@RequestBody Postagem postagem){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(postagem));
	}
	
	//end-point delete para excluir dados
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {	repository.deleteById(id);}
}