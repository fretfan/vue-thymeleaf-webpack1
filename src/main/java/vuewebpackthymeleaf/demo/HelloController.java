package vuewebpackthymeleaf.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/")
    public String one(Model model) {
        model.addAttribute("name", "One");
        return "one";
    }

    @GetMapping("/two")
    public String two(Model model) {
        model.addAttribute("name", "Two");
        return "two";
    }

}
