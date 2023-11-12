package br.com.pigrp17.appback.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.Forum;
import br.com.pigrp17.appback.repository.ForumRepository;

@Service
public class ForumServiceImpl implements ForumService {

    @Autowired
    private ForumRepository repo;

    @Override
    public Forum getById(int id) {
        Optional<Forum> forum = repo.findById(id);
        return forum.orElse(null);
    }

    @Override
    public List<Forum> getAll(Integer page, Integer limit) {
        if (page != null && limit != null) {
            Pageable pegeable = PageRequest.of(page, limit);
            return repo.findAll(pegeable).toList();
        } else {
            return repo.findAll();
        }
    }

    @Override
    public Forum save(Forum forum) {
        if (forum.getDataHora() == null) {
            forum.setDataHora(LocalDateTime.now());
        }
        return repo.save(forum);
    }

    @Override
    public Forum update(int id, Forum newForum) {
        Forum forum = repo.findById(id).orElse(null);
        if (forum != null) {
            return null;
        }
        newForum.setDataHora(LocalDateTime.now());
        return repo.save(newForum);
    }

    @Override
    public void deleteById(int id) {
        repo.deleteById(id);
    }
}
