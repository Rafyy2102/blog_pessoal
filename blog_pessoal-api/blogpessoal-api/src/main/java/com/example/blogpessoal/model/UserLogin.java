package com.example.blogpessoal.model;

public class UserLogin {
	
	private String nome;
	private String usuario;
	private String senha;
	//chave de acesso para o usuario
	private String token;
	private String tipo;
	
	
	public String getNome() {return nome;}
	public void setNome(String nome) {this.nome = nome;}
	public String getUsuario() {return usuario;}
	public void setUsuario(String usuario) {this.usuario = usuario;}
	public String getSenha() {return senha;}
	public void setSenha(String senha) {this.senha = senha;}
	public String getToken() {return token;}
	public void setToken(String token) {this.token = token;}
	public String getTipo() {return tipo;}
	public void setTipo(String token) {this.tipo = tipo;}
}