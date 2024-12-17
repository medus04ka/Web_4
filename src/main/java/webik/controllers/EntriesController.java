package webik.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import webik.DTO.EntryDTO;
import webik.entities.Entry;
import webik.entities.User;
import webik.repositories.EntryRepository;
import webik.security.services.UserService;

import java.security.Principal;

@RestController
@RequestMapping("/webik4/api/entries")
public class EntriesController {
    @Autowired
    private UserService userService;
    @Autowired
    private EntryRepository entryRepository;

    @GetMapping
    ResponseEntity<?> getUserEntries(Principal principal) {
        User user = (User) userService.loadUserByUsername(principal.getName());
        return ResponseEntity.ok(entryRepository.findByUser(user));
    }

    @PostMapping
    ResponseEntity<?> addEntry(@Validated @RequestBody EntryDTO entryDTO, Principal principal) {
        User user = (User) userService.loadUserByUsername(principal.getName());
        return ResponseEntity.ok(entryRepository.save(new Entry(entryDTO.getX(), entryDTO.getY(), entryDTO.getR(), user)));
    }
    @DeleteMapping
    ResponseEntity<?> deleteUserEntries(Principal principal) {
        User user = (User) userService.loadUserByUsername(principal.getName());
        return ResponseEntity.ok(entryRepository.deleteByUser(user));
    }
}