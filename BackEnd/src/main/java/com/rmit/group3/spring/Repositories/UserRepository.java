package com.rmit.group3.spring.Repositories;

import com.rmit.group3.spring.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User,Long> {

    @Override
    Iterable<User> findAllById(Iterable<Long> iterable);

    Boolean existsByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    Boolean existsByUsername(@Param("username") String username);
}
