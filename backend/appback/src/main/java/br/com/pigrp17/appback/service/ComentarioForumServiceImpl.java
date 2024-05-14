package br.com.pigrp17.appback.service;

import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.ComentarioForum;
import br.com.pigrp17.appback.repository.ComentarioForumRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ComentarioForumServiceImpl implements ComentarioForumService {
  
  private final ComentarioForumRepository repository;

  public ComentarioForum save(ComentarioForum comentario) {

    return repository.save(comentario);
  }

}
