package it.vacammar.dao;

import it.vacammar.dto.UserDTO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SecurityRepository extends CrudRepository<UserDTO, Integer> {

    Optional<UserDTO> findByUsername(String username);
}
