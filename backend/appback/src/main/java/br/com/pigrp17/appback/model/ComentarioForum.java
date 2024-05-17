package br.com.pigrp17.appback.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "Comentarios")
@Data
public class ComentarioForum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;
    
    @Column(name = "autor", nullable = false)
    private String autor;

    @Column(name = "avaliacao", nullable = false)
    private int avaliacao;

    @Column(name = "comentario", nullable = false)
    private String comentario;

    @Column(name = "data", nullable = false)
    private String data;

    @OneToMany(mappedBy = "comentarioPai", cascade = CascadeType.ALL)
    private List<RespostaComentario> respostas;
    
    @Column(name = "pode_responder", nullable = false)
    private boolean podeResponder;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(int avaliacao) {
        this.avaliacao = avaliacao;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public List<RespostaComentario> getRespostas() {
        return respostas;
    }

    public void setRespostas(List<RespostaComentario> respostas) {
        this.respostas = respostas;
    }

    public boolean isPodeResponder() {
        return podeResponder;
    }

    public void setPodeResponder(boolean podeResponder) {
        this.podeResponder = podeResponder;
    }
}
