package com.example.blogpessoal.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

//habilidatndo o Swagger doc
@EnableSwagger2
//configurando o Swagger para recerber alguns dados
// para acessar o swagger doc http://localhost:9000/swagger-ui.html/
@Configuration
public class SwaggerConfig {
	
	@Bean
	//Classe de configuração mostrar o caminho da aplicação
    public Docket docket(){
        return new Docket(DocumentationType.SWAGGER_2)
                    .select()
                    .apis( RequestHandlerSelectors.basePackage("com.example.blogpessoal.controller") )
                    .paths(PathSelectors.any())
                    .build()
                    .apiInfo(apiInfo());
    }
	
	//nome da aplicação e descrição
    private ApiInfo apiInfo(){
        return new ApiInfoBuilder()
                    .title("Blog Pessoal")
                    .description("Projeto de blog pessoal Api")
                    .version("1.0.5")
                    .contact(contact())
                    .build();
    }
    
    //dados da pessoa que criou a aplicação
    private Contact contact(){
        return new Contact("Rafaela S.S",
                "https://github.com/Rafyy2102",
                "Dev Full Stack Jr.");
    }
}