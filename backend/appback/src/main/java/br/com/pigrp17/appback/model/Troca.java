package br.com.pigrp17.appback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "troca")
@Data
public class Troca {
    private int trocaId;
    private int ofertanteId;
    private int recebedorId;
    private int mudaOfertadaId;
    private int mudaDesejadaId;
    private String status;
}
