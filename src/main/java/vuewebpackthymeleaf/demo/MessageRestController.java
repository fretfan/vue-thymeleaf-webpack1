package vuewebpackthymeleaf.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageRestController {

    @GetMapping("/test-message")
    public String getMsg() {
        System.out.println("CALLED");
        return "This is a backend msg";
    }
}
