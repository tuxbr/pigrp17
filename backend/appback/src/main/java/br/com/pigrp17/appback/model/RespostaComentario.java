package br.com.pigrp17.appback.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "Respostas_Comentarios")
@Data
public class RespostaComentario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String autor;
    
    private String comentario;
    
    private String data;

    @ManyToOne
    @JoinColumn(name = "comment_id")
    @JsonBackReference
    private ComentarioForum comentarioPai;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
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

    public ComentarioForum getComentarioPai() {
        return comentarioPai;
    }

    public void setComentarioPai(ComentarioForum comentarioPai) {
        this.comentarioPai = comentarioPai;
    }
}
