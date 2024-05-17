package br.com.pigrp17.appback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.pigrp17.appback.model.Troca;
import br.com.pigrp17.appback.service.TrocaService;

import java.util.List;

@RestController
@RequestMapping("/trocas")
public class TrocaController {

    @Autowired
    private TrocaService trocaService;

    @PostMapping("/trocar-mudas")
    public ResponseEntity<String> trocarMudas(@RequestParam int userId, @RequestParam int mudaId, @RequestParam int catalogoMudaId) {
        try {
            trocaService.trocarMudas(userId, mudaId, catalogoMudaId);
            return ResponseEntity.ok("Troca realizada com sucesso.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erro ao realizar troca: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<Troca>> getAllTrocas(@RequestParam(required = false) Integer page, @RequestParam(required = false) Integer limit) {
        try {
            List<Troca> trocas = trocaService.getAll(page, limit);
            if (trocas.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(trocas);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Troca> getTrocaById(@PathVariable int id) {
        Troca troca = trocaService.getById(id);
        if (troca != null) {
            return ResponseEntity.ok(troca);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Troca> saveTroca(@RequestBody Troca troca) {
        try {
            Troca savedTroca = trocaService.save(troca);
            return ResponseEntity.ok(savedTroca);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Troca> updateTroca(@PathVariable int id, @RequestBody Troca troca) {
        try {
            Troca updatedTroca = trocaService.update(id, troca);
            if (updatedTroca != null) {
                return ResponseEntity.ok(updatedTroca);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTroca(@PathVariable int id) {
        try {
            trocaService.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}