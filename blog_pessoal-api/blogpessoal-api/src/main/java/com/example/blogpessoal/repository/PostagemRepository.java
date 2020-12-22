package com.example.blogpessoal.repository;

import com.example.blogpessoal.model.Postagem;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long>{
	
	//mostra os dados de acordo com o pedido e até mesmo letras maiusculas e minusculas 
	public List<Postagem> findAllByTituloContainingIgnoreCase(String titulo);
}