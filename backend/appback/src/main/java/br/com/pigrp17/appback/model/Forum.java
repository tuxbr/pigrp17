package br.com.pigrp17.appback.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Data
public class Forum {
    @Id
    @GeneratedValue
    @Column(name = "post_id", nullable = false)
    private int postId;

    @Id
    @GeneratedValue
    @Column(name = "user_id", nullable = false)
    private int userId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private Usuario usuario;

    @Column(name = "conteudo", nullable = false)
    private String conteudo;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_hora", nullable = false)
    private LocalDateTime dataHora;
}
