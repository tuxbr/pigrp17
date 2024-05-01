package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.CatalogoMudas;
import br.com.pigrp17.appback.model.Muda;

public interface MudaService {
    Muda getById(int id);

    List<Muda> getAll(Integer page, Integer limit);

    List<CatalogoMudas> catalogoMudasList();

    Muda save(Muda muda);

    Muda update(int id, Muda muda);

    void deleteById(int id);
}
