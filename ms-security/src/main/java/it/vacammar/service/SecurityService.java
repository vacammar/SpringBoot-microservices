package it.vacammar.service;

import it.vacammar.Exception.ServiceSecurityException;
import it.vacammar.dao.SecurityRepository;
import it.vacammar.dto.UserDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SecurityService implements ISecurityService {

    private static final Logger logger = LoggerFactory.getLogger(SecurityService.class);
    private SecurityRepository securityRepository;

    @Autowired
    public SecurityService(SecurityRepository securityRepository) {
        this.securityRepository = securityRepository;
    }

    @Override
    public Optional<UserDTO> authenticate(UserDTO userDTO) throws ServiceSecurityException {
        try {
            return this.securityRepository.findByUsername(userDTO.getUsername());
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new ServiceSecurityException(e.getMessage());
        }
    }
}
