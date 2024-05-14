package br.com.pigrp17.appback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.pigrp17.appback.model.ComentarioForum;

@Repository
public interface ComentarioForumRepository extends JpaRepository<ComentarioForum, Long> {
  
}
