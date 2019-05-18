package it.vacammar.service;

import it.vacammar.Exception.ServiceSecurityException;
import it.vacammar.dto.UserDTO;

import java.util.Optional;

public interface ISecurityService {

    /**
     * Authentication method.
     *
     * @param userDTO
     * @return Optional<UserDTO>
     */
    Optional<UserDTO> authenticate(UserDTO userDTO) throws ServiceSecurityException;
}
