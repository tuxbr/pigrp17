package br.com.pigrp17.appback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue
    private int userId;
    private String nome;
    private String email;
    private String localizacao;
}
