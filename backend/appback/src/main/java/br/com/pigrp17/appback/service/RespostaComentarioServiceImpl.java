package br.com.pigrp17.appback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.RespostaComentario;
import br.com.pigrp17.appback.repository.RespostaComentarioRepository;

@Service
public class RespostaComentarioServiceImpl implements RespostaComentarioService {

    @Autowired
    private RespostaComentarioRepository repository;

    @Override
    public RespostaComentario save(RespostaComentario respostaComentario) {
        return repository.save(respostaComentario);
    }

    @Override
    public List<RespostaComentario> getAllRespostas() {
        return repository.findAll();
    }
}