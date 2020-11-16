package com.example.blogpessoal.security;

import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.example.blogpessoal.model.Usuario;

public class UserDetailsImpl implements UserDetails{
	
	//controler interno dos atributos
	private static final long serialVersionUID = 1L;
	
	//atributos privados
	private String userName;
	private String password;
	private List<GrantedAuthority> authorities;
	
	//contrutor de classe usando os paramentros userName e passWord e popular
	public UserDetailsImpl (Usuario user) {
		this.userName = user.getUsuario();
		this.password = user.getSenha();
		
	}

	//construtor vazio
	public UserDetailsImpl() {}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userName;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}