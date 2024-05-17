package br.com.pigrp17.appback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.ComentarioForum;
import br.com.pigrp17.appback.repository.ComentarioForumRepository;

@Service
public class ComentarioForumServiceImpl implements ComentarioForumService {

    @Autowired
    private ComentarioForumRepository repository;

    @Override
    public ComentarioForum save(ComentarioForum comentarioForum) {
        return repository.save(comentarioForum);
    }

    @Override
    public List<ComentarioForum> getAllComments() {
        return repository.findAll();
    }

    @Override
    public List<ComentarioForum> getAllCommentsWithResponses() {
        return repository.findAllWithRespostas();
    }
}