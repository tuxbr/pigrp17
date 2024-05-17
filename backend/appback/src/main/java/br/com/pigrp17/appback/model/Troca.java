package br.com.pigrp17.appback.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Trocas")
public class Troca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "troca_id", nullable = false)
    private int trocaId;

    @Column(name = "usuario_id", nullable = false)
    private int usuarioId;

    @Column(name = "muda_id", nullable = false)
    private int mudaId;

    @Column(name = "catalogo_muda_id", nullable = false)
    private int catalogoMudaId;

    @Column(name = "data_troca", nullable = false)
    private LocalDateTime dataTroca;

    public Troca() {
        this.dataTroca = LocalDateTime.now();
    }

    public int getTrocaId() {
        return trocaId;
    }

    public void setTrocaId(int trocaId) {
        this.trocaId = trocaId;
    }

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public int getMudaId() {
        return mudaId;
    }

    public void setMudaId(int mudaId) {
        this.mudaId = mudaId;
    }

    public int getCatalogoMudaId() {
        return catalogoMudaId;
    }

    public void setCatalogoMudaId(int catalogoMudaId) {
        this.catalogoMudaId = catalogoMudaId;
    }

    public LocalDateTime getDataTroca() {
        return dataTroca;
    }

    public void setDataTroca(LocalDateTime dataTroca) {
        this.dataTroca = dataTroca;
    }
}