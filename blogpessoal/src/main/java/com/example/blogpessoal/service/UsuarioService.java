package com.example.blogpessoal.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.blogpessoal.model.UserLogin;
import com.example.blogpessoal.model.Usuario;
import com.example.blogpessoal.repository.UsuarioRepository;

@Service
public class UsuarioService {
	//responsabilidade de instanciar fica com o spring
		@Autowired
		//manipulação dos dados de persistencia do usuario
		private UsuarioRepository repository;
		
		//criando o metodo cadastros para receber um usuario
		public Usuario CadastrarUsuario(Usuario usuario) {
			//criptografar a senha do usuario
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			
			//variavel string que recebe a senha do usuario
			String senhaEncoder = encoder.encode(usuario.getSenha());
			//acessar e modificar a senha do usuario
			usuario.setSenha(senhaEncoder);
			
			return repository.save(usuario);
		}
		
		//criando o metodo logar para receber um usuario
		public Optional<UserLogin> Logar(Optional<UserLogin> user){
			//criptografar a senha do usuario
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			
			//criar um objeto para recber um usuario
			Optional <Usuario> usuario = repository.findByUsuario(user.get().getUsuario());
			
			//comparando a senha que o usuario ensiriu com a que esta cadastrada
			if(usuario.isPresent()) {
				if(encoder.matches(user.get().getSenha(),usuario.get().getSenha())) {
					
					//mostrando ao usuario e sua senha
					String auth = user.get().getUsuario() + ":"+user.get().getSenha();
					//trazendo as informações no padrão byte
					byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
					//autenticação do header
					String authHeader = "Basic" + new String(encodedAuth);
					
					user.get().setToken(authHeader);
					user.get().setNome(usuario.get().getNome());
					user.get().setSenha(usuario.get().getSenha());
					
					return user;
				}
			}
			return null;			
		}
}