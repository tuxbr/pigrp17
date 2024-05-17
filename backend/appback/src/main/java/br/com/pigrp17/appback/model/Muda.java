package br.com.pigrp17.appback.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Mudas")
@Data
public class Muda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "muda_id", nullable = false)
    private int mudaId;

    @Column(name = "nome_planta", nullable = false)
    private String nomePlanta;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    @Column(name = "categoria", nullable = false)
    private String categoria;

    @Column(name = "imagem", columnDefinition = "TEXT")
    private String imagem;

    @Column(name = "proprietario_id", nullable = false)
    private int proprietarioId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "proprietario_id", insertable = false, updatable = false)
    private Usuario proprietario;
}
