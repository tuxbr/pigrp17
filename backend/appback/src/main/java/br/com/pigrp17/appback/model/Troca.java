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
public class Troca {
    @Id
    @GeneratedValue
    @Column(name = "troca_id", nullable = false)
    private int trocaId;

    @Column(name = "ofertante_id", nullable = false)
    private int ofertanteId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "orfertante_id", insertable = false, updatable = false)
    private Usuario ofertante;

    @Column(name = "recebedor_id")
    private int recebedorId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recebedor_id", insertable = false, updatable = false)
    private Usuario recebedor;

    @Column(name = "muda_ofertada_id", nullable = false)
    private int mudaOfertadaId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "muda_ofertada_id", insertable = false, updatable = false)
    private Muda mudaOfertada;

    @Column(name = "muda_desejada_id")
    private int mudaDesejadaId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "muda_desejada_id", insertable = false, updatable = false)
    private Muda mudaDesejada;

    @Column(name = "status")
    private String status;
}
