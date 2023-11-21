package br.com.pigrp17.appback.service;

import java.util.List;

import br.com.pigrp17.appback.model.Usuario;

public interface UsuarioService {
    Usuario getById(int id);

    List<Usuario> getAll(Integer page, Integer limit);

    Usuario save(Usuario usuario);

    Usuario update(int id, Usuario usuario);

    void deleteById(int id);
}
