package br.com.pigrp17.appback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "avaliacao")
@Data
public class Avaliacao {
    private int avaliacaoId;
    private int avaliadorId;
    private int avaliadoId;
    private String comentario;
    private int classificacao;
}
