package it.vacammar.api;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class UiDispatcher {

    @GetMapping
    public String goToHome(Model model) {
        return "forward:/index.html";
    }
}
