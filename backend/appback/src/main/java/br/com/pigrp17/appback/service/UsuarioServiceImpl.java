package br.com.pigrp17.appback.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.pigrp17.appback.model.Usuario;
import br.com.pigrp17.appback.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository repo;

    @Override
    public Usuario getById(int id) {
        Optional<Usuario> usuario = repo.findById(id);
        return usuario.orElse(null);
    }

    @Override
    public List<Usuario> getAll(Integer page, Integer limit) {
        if (page != null && limit != null) {
            Pageable pegeable = PageRequest.of(page, limit);
            return repo.findAll(pegeable).toList();
        } else {
            return repo.findAll();
        }
    }

    @Override
    public Usuario save(Usuario usuario) {
        return repo.save(usuario);
    }

    @Override
    public Usuario update(int id, Usuario newUsuario) {
        Usuario usuario = repo.findById(id).orElse(null);
        if (usuario != null) {
            return null;
        }
        return repo.save(newUsuario);
    }

    @Override
    public void deleteById(int id) {
        repo.deleteById(id);
    }
}
