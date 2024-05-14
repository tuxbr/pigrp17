package br.com.pigrp17.appback.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
public class ComentarioForum {
  @Id
  @GeneratedValue
  private Long id;

  @Column(name = "forum_id", nullable = false)
  private Long forumId;
  
  @Column(name = "autor", nullable = false)
  private String autor;

  @Column(name = "cometario", nullable = false)
  private String comentario;

  @Temporal(TemporalType.TIMESTAMP)
  @Column(name = "data_criacao")
  private LocalDateTime dataCriacao;
}
