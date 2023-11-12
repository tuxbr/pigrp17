package br.com.pigrp17.appback.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.Muda;
import br.com.pigrp17.appback.repository.MudaRepository;

@Service
public class MudaServiceImpl implements MudaService {

    @Autowired
    private MudaRepository repo;

    @Override
    public Muda getById(int id) {
        Optional<Muda> muda = repo.findById(id);
        return muda.orElse(null);
    }

    @Override
    public List<Muda> findAll() {
        return repo.findAll();
    }

    @Override
    public Muda save(Muda muda) {
        return repo.save(muda);
    }

    @Override
    public Muda update(int id, Muda newMuda) {
        Muda muda = repo.findById(id).orElse(null);
        if (muda != null) {
            return null;
        }
        return repo.save(newMuda);
    }

    @Override
    public void deleteById(int id) {
        repo.deleteById(id);
    }
}
