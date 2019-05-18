package it.vacammar.dto;

import org.springframework.data.annotation.Id;

import java.io.Serializable;

public class Recipe implements Serializable {

    @Id
    private Long id;
    private String title;
    private String description;
    private String author;

    public Recipe() {
    }

    public Recipe(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
