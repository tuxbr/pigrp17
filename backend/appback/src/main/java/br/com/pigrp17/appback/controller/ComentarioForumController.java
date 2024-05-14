package br.com.pigrp17.appback.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pigrp17.appback.model.ComentarioForum;
import br.com.pigrp17.appback.service.ComentarioForumServiceImpl;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comentario")
public class ComentarioForumController {
  
  private final ComentarioForumServiceImpl comentarioForumService;

  @PostMapping
  public ResponseEntity<ComentarioForum> save(@RequestBody ComentarioForum comentarioForum) {
    
    return ResponseEntity.ok().body(comentarioForumService.save(comentarioForum));
  }

}
