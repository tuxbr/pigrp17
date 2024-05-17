package br.com.pigrp17.appback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.pigrp17.appback.model.ComentarioForum;
import java.util.List;

@Repository
public interface ComentarioForumRepository extends JpaRepository<ComentarioForum, Long> {
    
    @Query("SELECT c FROM ComentarioForum c LEFT JOIN FETCH c.respostas")
    List<ComentarioForum> findAllWithRespostas();
}
