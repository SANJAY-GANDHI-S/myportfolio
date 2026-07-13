package com.example.portfolio.controller;

import com.example.portfolio.dto.ContactRequest;
import com.example.portfolio.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/contact")
@CrossOrigin(origins = "https://myportfolio-phi-rose.vercel.app/")
public class ContactController {

  @Autowired
  private EmailService emailService;

  @PostMapping
  public ResponseEntity<String> sendMessage(@RequestBody ContactRequest request) {
    try {
      emailService.sendContactEmail(request);
      return ResponseEntity.ok("Message sent successfully!");
    } catch (Exception e) {
      return ResponseEntity.status(500).body("Failed to send message: " + e.getMessage());
    }
  }

}
