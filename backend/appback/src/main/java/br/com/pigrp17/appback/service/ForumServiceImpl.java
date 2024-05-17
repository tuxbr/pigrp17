package br.com.pigrp17.appback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.ComentarioForum;
import br.com.pigrp17.appback.repository.ComentarioForumRepository;

@Service
public class ForumServiceImpl implements ForumService {

    @Autowired
    private ComentarioForumRepository comentarioRepository;

    @Override
    public List<ComentarioForum> getAllCommentsWithResponses() {
        return comentarioRepository.findAll();
    }
}