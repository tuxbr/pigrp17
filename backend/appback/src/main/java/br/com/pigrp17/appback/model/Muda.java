package br.com.pigrp17.appback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "muda")
@Data
public class Muda {
    private int mudaId;
    private String nomePlanta;
    private String descricao;
    private String categoria;
    private String imagem;
    private int proprietarioId;
}
