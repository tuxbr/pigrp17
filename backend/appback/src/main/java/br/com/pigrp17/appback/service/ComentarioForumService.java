package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.ComentarioForum;

public interface ComentarioForumService {
  
  ComentarioForum save(ComentarioForum comentarioForum);

  List<ComentarioForum> getAllComments();
}
