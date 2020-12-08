package com.example.blogpessoal.security;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.blogpessoal.model.Usuario;
import com.example.blogpessoal.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	//responsabilidade de instanciar fica com o spring
	@Autowired
	//manipulação dos dados de persistencia do usuario
	private UsuarioRepository useRepository;
	
	//subesctita de  metodo
	@Override
	//tratativa de erro no metodo
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException{
		//recebendo um objeto
		Optional<Usuario> user = useRepository.findByUsuario(userName);
		//tratativa de erros
		user.orElseThrow(() -> new UsernameNotFoundException(userName + "not found."));
		
		return user.map(UserDetailsImpl::new).get();
	}
}