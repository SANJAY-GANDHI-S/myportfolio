package com.example.portfolio.service;

import com.example.portfolio.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

  @Autowired
  private JavaMailSender mailSender;

  public void sendContactEmail(ContactRequest request) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo("sanjaygandhi.sakadevan@gmail.com");
    message.setSubject("New Portfolio Contact from " + request.getName());
    message.setText(
      "Name: " + request.getName() + "\n" +
        "Email: " + request.getEmail() + "\n\n" +
        "Message:\n" + request.getMessage()
    );
    message.setReplyTo(request.getEmail());

    mailSender.send(message);
  }
}
