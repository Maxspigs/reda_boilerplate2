package com.eq2.reda.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.PrimaryKeyJoinColumn;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
@Data
@AllArgsConstructor(access=AccessLevel.PACKAGE)
@NoArgsConstructor(access=AccessLevel.PACKAGE)
@PrimaryKeyJoinColumn(name="id")
@Builder
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.TABLE)
    protected long id;

    @Column(unique=true)
    protected String username;

    protected String password;

    @Column(columnDefinition="boolean default false")
    protected boolean active;

}