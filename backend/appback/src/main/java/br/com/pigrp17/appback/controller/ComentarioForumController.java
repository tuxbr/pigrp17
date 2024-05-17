package br.com.pigrp17.appback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.pigrp17.appback.model.ComentarioForum;
import br.com.pigrp17.appback.service.ComentarioForumService;

import java.util.List;

@RestController
@RequestMapping("/comentarios")
public class ComentarioForumController {

    @Autowired
    private ComentarioForumService comentarioService;

    @GetMapping
    public ResponseEntity<List<ComentarioForum>> getAllComments() {
        List<ComentarioForum> comments = comentarioService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    @PostMapping
    public ResponseEntity<ComentarioForum> createComment(@RequestBody ComentarioForum comment) {
        ComentarioForum newComment = comentarioService.save(comment);
        return ResponseEntity.ok(newComment);
    }

}