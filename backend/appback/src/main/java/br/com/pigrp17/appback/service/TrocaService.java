package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.Troca;

public interface TrocaService {
    Troca getById(int id);

    List<Troca> getAll(Integer page, Integer limit);

    Troca save(Troca troca);

    Troca update(int id, Troca troca);

    void deleteById(int id);

    void trocarMudas(int userId, int mudaId, int catalogoMudaId); // Novo método
    
}