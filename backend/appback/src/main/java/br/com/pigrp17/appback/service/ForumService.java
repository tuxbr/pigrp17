package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.Forum;

public interface ForumService {
    Forum getById(int id);

    List<Forum> findAll();

    Forum save(Forum forum);

    Forum update(int id, Forum forum);

    void deleteById(int id);
}
