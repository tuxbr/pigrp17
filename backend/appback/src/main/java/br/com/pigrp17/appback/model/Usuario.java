package br.com.pigrp17.appback.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf", nullable = false)
    private String cpf;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "senha", nullable = false)
    private String senha;

    @Column(name = "localizacao", nullable = false)
    private String localizacao;

    @Column(name = "logradouro", nullable = false)
    private String logradouro;

    @Column(name = "bairro", nullable = false)
    private String bairro;

    @Column(name = "numero", nullable = false)
    private String numero;

    @Column(name = "CEP", nullable = false)
    private String CEP;

    @Column(name = "complemento", nullable = false)
    private String complemento;

    @Column(name = "cidade", nullable = false)
    private String cidade;

    @Column(name = "celular", nullable = false)
    private String celular;

    @Column(name = "uf", nullable = false)
    private String uf;
}