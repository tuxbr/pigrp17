package br.com.pigrp17.appback.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class CatalogoMudas {  
  @Id
  @GeneratedValue
  @Column(name = "id", nullable = false)
  private int id;

  @Column(name = "nome", nullable = false)
  private String nome;

  @Column(name = "descricao", nullable = false)
  private String descricao;

  @Column(name = "categoria", nullable = false)
  private String categoria;

  @Column(name = "imagem")
  private String imagem;
}