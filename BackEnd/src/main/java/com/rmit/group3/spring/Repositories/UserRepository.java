package com.rmit.group3.spring.Repositories;

import com.rmit.group3.spring.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {

    @Override
    Iterable<User> findAllById(Iterable<Long> iterable);

    Boolean existsByUsernameAndPassword(String username, String password);
}
