package com.example.blogpessoal.model;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "postagem")
public class Postagem {	
		
		//criando o id como chave primaria e auto_incremento
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		
		//o campo titulo não é nulo e o size é o tamanho do campo
		@NotNull
		@Size(min = 1)
		private String titulo;
		
		//o campo titulo não é nulo e o size é o tamanho do campo
		@NotNull
		@Size(min = 1)
		private String texto;
		
		//colocar data e hora de acordo com o dia e se auto preenche 
		@Temporal(TemporalType.TIMESTAMP)
		private Date data = new java.sql.Date(System.currentTimeMillis());
		
		//Criando varios temas para uma postagem e não trazendo o mesma postagem
		@ManyToOne
		@JsonIgnoreProperties("postagem")
		private Tema tema;
		
		// GETTERS E SETTERS
		public long getId() {return id;}
		public void setId(long id) {this.id = id;}
		public String getTitulo() {return titulo;}
		public void setTitulo(String titulo) {this.titulo = titulo;}
		public String getTexto() {return texto;}
		public void setTexto(String texto) {this.texto = texto;}
		public Date getData() {return data;}
		public void setData(Date data) {this.data = data;}
		public Tema getTema() {return tema;}
		public void setTema(Tema tema) {this.tema = tema;}
}