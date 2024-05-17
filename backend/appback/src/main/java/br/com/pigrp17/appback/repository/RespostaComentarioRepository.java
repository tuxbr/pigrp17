package br.com.pigrp17.appback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.pigrp17.appback.model.RespostaComentario;

@Repository
public interface RespostaComentarioRepository extends JpaRepository<RespostaComentario, Long> {
}