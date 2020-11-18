package com.example.blogpessoal.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_tema")
public class Tema {
	
	//criando o id como chave primaria e auto_incremento
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	//campo não pode ser vazio
	@NotNull
	private String descricao;
		
	/*trazendo uma postagem para varios temas, mapeando o tema para ser um em 
	baixo do outro e organizado e para não ter a recursividade*/
	@OneToMany(mappedBy = "tema", cascade = CascadeType.ALL)	
	@JsonIgnoreProperties("tema")
	private List<Postagem> postagem;		
	
	//GETTERS E SETTERS
	public long getId() {return id;}
	public void setId(long id) {this.id = id;}
	public String getDescricao() {return descricao;}
	public void setDescricao(String descricao) {this.descricao = descricao;}
	public List<Postagem> getPostagem() {return postagem;}
	public void setPostagem(List<Postagem> postagem) {this.postagem = postagem;}	
}