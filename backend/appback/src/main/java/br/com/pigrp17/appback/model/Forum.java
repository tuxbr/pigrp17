package br.com.pigrp17.appback.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "forum")
@Data
public class Forum {
    private int postId;
    private int userId;
    private String conteudo;
    private LocalDateTime dataHora;
}
