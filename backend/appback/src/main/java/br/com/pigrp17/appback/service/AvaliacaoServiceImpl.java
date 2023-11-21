package br.com.pigrp17.appback.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.Avaliacao;
import br.com.pigrp17.appback.repository.AvaliacaoRepository;

@Service
public class AvaliacaoServiceImpl implements AvaliacaoService {

    @Autowired
    private AvaliacaoRepository repo;

    @Override
    public Avaliacao getById(int id) {
        Optional<Avaliacao> avaliacao = repo.findById(id);
        return avaliacao.orElse(null);
    }

    @Override
    public List<Avaliacao> getAll(Integer page, Integer limit) {
        if (page != null && limit != null) {
            Pageable pegeable = PageRequest.of(page, limit);
            return repo.findAll(pegeable).toList();
        } else {
            return repo.findAll();
        }
    }

    @Override
    public Avaliacao save(Avaliacao avaliacao) {
        return repo.save(avaliacao);
    }

    @Override
    public Avaliacao update(int id, Avaliacao newAvaliacao) {
        Avaliacao avaliacao = repo.findById(id).orElse(null);
        if (avaliacao != null) {
            return null;
        }
        return repo.save(newAvaliacao);
    }

    @Override
    public void deleteById(int id) {
        repo.deleteById(id);
    }
}
