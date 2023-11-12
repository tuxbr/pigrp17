package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.Troca;

public interface TrocaService {
    Troca getById(int id);

    List<Troca> findAll();

    Troca save(Troca troca);

    Troca update(int id, Troca troca);

    void deleteById(int id);
}
