package br.com.pigrp17.appback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.pigrp17.appback.model.Muda;

@Repository
public interface MudaRepository extends JpaRepository<Muda, Integer> {

}
