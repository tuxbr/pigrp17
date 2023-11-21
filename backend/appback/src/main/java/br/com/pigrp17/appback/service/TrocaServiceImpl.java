package br.com.pigrp17.appback.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.Troca;
import br.com.pigrp17.appback.repository.TrocaRepository;

@Service
public class TrocaServiceImpl implements TrocaService {

    @Autowired
    private TrocaRepository repo;

    @Override
    public Troca getById(int id) {
        Optional<Troca> troca = repo.findById(id);
        return troca.orElse(null);
    }

    @Override
    public List<Troca> getAll(Integer page, Integer limit) {
        if (page != null && limit != null) {
            Pageable pegeable = PageRequest.of(page, limit);
            return repo.findAll(pegeable).toList();
        } else {
            return repo.findAll();
        }
    }

    @Override
    public Troca save(Troca troca) {
        return repo.save(troca);
    }

    @Override
    public Troca update(int id, Troca newTroca) {
        Troca troca = repo.findById(id).orElse(null);
        if (troca != null) {
            return null;
        }
        return repo.save(newTroca);
    }

    @Override
    public void deleteById(int id) {
        repo.deleteById(id);
    }
}
