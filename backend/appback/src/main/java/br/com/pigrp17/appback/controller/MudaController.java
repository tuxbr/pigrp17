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

import br.com.pigrp17.appback.model.CatalogoMudas;
import br.com.pigrp17.appback.model.Muda;
import br.com.pigrp17.appback.service.MudaService;

@RestController
@RequestMapping("/mudas")
public class MudaController {

    @Autowired
    private MudaService service;

    @GetMapping
    public ResponseEntity<List<Muda>> getAllMudas(@PathVariable(required = false) Integer page,
            @PathVariable(required = false) Integer limit) {
        try {
            List<Muda> mudas = service.getAll(page, limit);
            if (mudas.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(mudas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Muda> getMuda(@PathVariable int id) {
        try {
            Muda muda = service.getById(id);
            if (muda == null) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(muda, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Muda> postMuda(@RequestBody Muda muda) {
        try {
            Muda newMuda = service.save(muda);
            return new ResponseEntity<>(newMuda, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<Muda> updateMuda(@PathVariable int id,
            @RequestBody Muda muda) {
        try {
            Muda newMuda = service.update(id, muda);
            if (newMuda == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(newMuda, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<HttpStatus> deleteMuda(@PathVariable int id) {
        try {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/catalogo")
    public ResponseEntity<List<CatalogoMudas>> catalogoMudasList (@PathVariable(required = false) Integer page,
            @PathVariable(required = false) Integer limit) {
        try {
            List<CatalogoMudas> catalogoMudas = service.catalogoMudasList();
            if (catalogoMudas.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(catalogoMudas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
