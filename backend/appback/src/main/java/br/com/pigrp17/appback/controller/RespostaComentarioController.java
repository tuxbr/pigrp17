package br.com.pigrp17.appback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.pigrp17.appback.model.RespostaComentario;
import br.com.pigrp17.appback.service.RespostaComentarioService;

import java.util.List;

@RestController
@RequestMapping("/respostas")
public class RespostaComentarioController {

    @Autowired
    private RespostaComentarioService respostaService;

    @GetMapping
    public ResponseEntity<List<RespostaComentario>> getAllRespostas() {
        List<RespostaComentario> respostas = respostaService.getAllRespostas();
        return ResponseEntity.ok(respostas);
    }

    @PostMapping
    public ResponseEntity<RespostaComentario> createResposta(@RequestBody RespostaComentario resposta) {
        RespostaComentario newResposta = respostaService.save(resposta);
        return ResponseEntity.ok(newResposta);
    }
}