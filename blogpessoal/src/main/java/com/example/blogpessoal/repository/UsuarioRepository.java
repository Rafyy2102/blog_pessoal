package com.example.blogpessoal.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.blogpessoal.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	//	em findBy usara o atributo usuario do usuario da model
	public Optional<Usuario> findByUsuario(String usuario);
}
