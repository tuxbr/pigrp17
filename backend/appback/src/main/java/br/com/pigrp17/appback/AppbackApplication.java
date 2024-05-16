package br.com.pigrp17.appback;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.datasource.init.ScriptUtils;

import javax.sql.DataSource;

@SpringBootApplication
public class AppbackApplication implements CommandLineRunner {

    private final DataSource dataSource;

    public AppbackApplication(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public static void main(String[] args) {
        SpringApplication.run(AppbackApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Executa o SQL
        Resource resource = new ClassPathResource("bd.sql");
        ScriptUtils.executeSqlScript(dataSource.getConnection(), resource);
        System.out.println("Query executada com sucesso.");
    }
}
