package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.Avaliacao;

public interface AvaliacaoService {
    Avaliacao getById(int id);

    List<Avaliacao> findAll();

    Avaliacao save(Avaliacao avaliacao);

    Avaliacao update(int id, Avaliacao avaliacao);

    void deleteById(int id);
}
