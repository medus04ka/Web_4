package webik;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@EnableConfigurationProperties
public class Applik extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(Applik.class, args);
    }
}