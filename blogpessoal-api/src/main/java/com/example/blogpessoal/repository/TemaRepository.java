package com.example.blogpessoal.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.blogpessoal.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository<Tema, Long>{
	
	//mostra os dados de acordo com o pedido e até mesmo letras maiusculas e minusculas 
	public List<Tema> findAllByDescricaoContainingIgnoreCase(String descricao);
}
