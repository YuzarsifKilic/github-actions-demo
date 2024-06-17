package com.yuzarsif.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller {

    @GetMapping
    public String demo() {
        return "Demo";
    }

    @GetMapping("/demo")
    public String demo2() {
        return "New Demo";
    }

    @GetMapping("/google-cloud")
    public String googleCloud() {
        return "Google Cloud 2";
    }
}
