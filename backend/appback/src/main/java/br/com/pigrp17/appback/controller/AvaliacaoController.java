package br.com.pigrp17.appback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pigrp17.appback.model.Avaliacao;
import br.com.pigrp17.appback.service.AvaliacaoService;

@RestController
@RequestMapping("/avaliacaos")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService service;

    @GetMapping
    public ResponseEntity<List<Avaliacao>> getAllAvaliacoes(@PathVariable(required = false) Integer page,
            @PathVariable(required = false) Integer limit) {
        try {
            List<Avaliacao> avaliacaos = service.getAll(page, limit);
            if (avaliacaos.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(avaliacaos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Avaliacao> getAvaliacao(@PathVariable int id) {
        try {
            Avaliacao avaliacao = service.getById(id);
            if (avaliacao == null) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(avaliacao, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Avaliacao> postAvaliacao(@RequestBody Avaliacao avaliacao) {
        try {
            Avaliacao newAvaliacao = service.save(avaliacao);
            return new ResponseEntity<>(newAvaliacao, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<Avaliacao> updateAvaliacao(@PathVariable int id,
            @RequestBody Avaliacao avaliacao) {
        try {
            Avaliacao newAvaliacao = service.update(id, avaliacao);
            if (newAvaliacao == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(newAvaliacao, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<HttpStatus> deleteAvaliacao(@PathVariable int id) {
        try {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
