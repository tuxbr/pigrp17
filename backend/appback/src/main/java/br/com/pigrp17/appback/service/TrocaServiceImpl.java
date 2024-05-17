package br.com.pigrp17.appback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import br.com.pigrp17.appback.model.CatalogoMuda;
import br.com.pigrp17.appback.model.Muda;
import br.com.pigrp17.appback.model.Troca;
import br.com.pigrp17.appback.repository.CatalogoMudaRepository;
import br.com.pigrp17.appback.repository.MudaRepository;
import br.com.pigrp17.appback.repository.TrocaRepository;

import java.util.List;

@Service
public class TrocaServiceImpl implements TrocaService {

    @Autowired
    private MudaRepository mudaRepository;

    @Autowired
    private CatalogoMudaRepository catalogoMudaRepository;

    @Autowired
    private TrocaRepository trocaRepository;

    @Override
    public Troca getById(int id) {
        return trocaRepository.findById(id).orElse(null);
    }

    @Override
    public List<Troca> getAll(Integer page, Integer limit) {
        if (page != null && limit != null) {
            Pageable pageable = PageRequest.of(page, limit);
            return trocaRepository.findAll(pageable).toList();
        } else {
            return trocaRepository.findAll();
        }
    }

    @Override
    public Troca save(Troca troca) {
        return trocaRepository.save(troca);
    }

    @Override
    public Troca update(int id, Troca troca) {
        if (trocaRepository.existsById(id)) {
            troca.setTrocaId(id);
            return trocaRepository.save(troca);
        }
        return null;
    }

    @Override
    public void deleteById(int id) {
        trocaRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void trocarMudas(int userId, int mudaId, int catalogoMudaId) {

        Muda muda = mudaRepository.findById(mudaId)
            .orElseThrow(() -> new RuntimeException("Muda não encontrada"));

        CatalogoMuda catalogoMuda = catalogoMudaRepository.findById(catalogoMudaId)
            .orElseThrow(() -> new RuntimeException("Muda do catálogo não encontrada"));

        Troca troca = new Troca();
        troca.setUsuarioId(userId);
        troca.setMudaId(mudaId);
        troca.setCatalogoMudaId(catalogoMudaId);
        trocaRepository.save(troca);

        CatalogoMuda novaCatalogoMuda = new CatalogoMuda();
        novaCatalogoMuda.setNome(muda.getNomePlanta());
        novaCatalogoMuda.setDescricao(muda.getDescricao());
        novaCatalogoMuda.setCategoria(muda.getCategoria());
        novaCatalogoMuda.setImagem(muda.getImagem());
        catalogoMudaRepository.save(novaCatalogoMuda);

        mudaRepository.delete(muda);

        Muda novaMuda = new Muda();
        novaMuda.setNomePlanta(catalogoMuda.getNome());
        novaMuda.setDescricao(catalogoMuda.getDescricao());
        novaMuda.setCategoria(catalogoMuda.getCategoria());
        novaMuda.setImagem(catalogoMuda.getImagem());
        novaMuda.setProprietarioId(userId);
        mudaRepository.save(novaMuda);

        catalogoMudaRepository.delete(catalogoMuda);
    }
}