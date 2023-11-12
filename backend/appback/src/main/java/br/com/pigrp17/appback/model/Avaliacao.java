package br.com.pigrp17.appback.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Avaliacao {
    @Id
    @GeneratedValue
    @Column(name = "avaliacao_id", nullable = false)
    private int avaliacaoId;

    @Column(name = "avaliador_id", nullable = false)
    private int avaliadorId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "avaliador_id", insertable = false, updatable = false)
    private Usuario avaliador;

    @Column(name = "avaliado_id", nullable = false)
    private int avaliadoId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "avaliado_id", insertable = false, updatable = false)
    private Usuario avalido;

    @Column(name = "comentario", nullable = false)
    private String comentario;

    @Column(name = "classificacao", nullable = false)
    private int classificacao;
}
