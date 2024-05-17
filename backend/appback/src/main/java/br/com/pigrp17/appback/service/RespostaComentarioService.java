package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.RespostaComentario;

public interface RespostaComentarioService {

    RespostaComentario save(RespostaComentario respostaComentario);

    List<RespostaComentario> getAllRespostas();
    
}
