package it.vacammar.api;


import it.vacammar.Exception.ServiceSecurityException;
import it.vacammar.dto.UserDTO;
import it.vacammar.service.ISecurityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/security")
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);
    private ISecurityService securityService;

    @Autowired
    AuthenticationController(ISecurityService securityService) {
        this.securityService = securityService;
    }

    @RequestMapping(value = "/status", method = RequestMethod.GET)
    public ResponseEntity<String> microserviceCheck() {
        return new ResponseEntity<>("Hello from ms-secutiry!", HttpStatus.OK);
    }

    @RequestMapping(value = "/auth", method = RequestMethod.POST)
    public ResponseEntity<UserDTO> authentication(@RequestBody UserDTO userDTO) {
        try {
            Optional<UserDTO> result = this.securityService.authenticate(userDTO);
            if (result.isPresent()) {
                return new ResponseEntity<>(result.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } catch (ServiceSecurityException e) {
            logger.error(e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
