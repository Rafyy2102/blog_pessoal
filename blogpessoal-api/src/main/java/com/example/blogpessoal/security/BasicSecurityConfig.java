package com.example.blogpessoal.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter{
	//responsabilidade de instanciar fica com o spring
	@Autowired
	//
	private UserDetailsService userDetailsService;
	
	//usa para subescrever um metodo
	@Override
	// habilite a autenticação baseada na memória com um usuário 
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailsService);
	}
	
	//expor o resultado
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	//usa para subescrever um metodo
	@Override
	//criar uma instancia atual
	protected void configure(HttpSecurity http)  throws Exception{
		http.authorizeRequests()
		/*liberar alguns caminhos ou endpoits para ter um acesso sem precisa de token, 
		assim o usuario não precia de um token só entrar, mais logo que entrear ja gera uma chave*/
		.antMatchers("/usuarios/logar").permitAll()
		//liberar alguns caminhos ou endpoits para ter um acesso sem precisa de token.
		.antMatchers("/usuarios/cadastrar").permitAll()
		//as outras requisisções deverá ser autenticadas
		.anyRequest().authenticated()
		//padrão bacic para gera a chave token
		.and().httpBasic()
		//indicar o tipo de sessão que erá usada e a politica que não guarda sessão
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		//habilidatr o cors é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens
		.and().cors()
		//configuração de usuario padrão e uma proteção para o site(usuario)
		.and().csrf().disable();
		
	}	
}