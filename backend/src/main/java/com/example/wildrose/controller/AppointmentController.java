package com.example.wildrose.controller;

import com.example.wildrose.model.Appointment;
import com.example.wildrose.services.AppointmentServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    private final AppointmentServices service;

    public AppointmentController(AppointmentServices service) {
        this.service = service;
    }


    // Get all appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return service.findAll();
    }


    // Get appointment by ID
    @GetMapping("/{id}")
    public Appointment getAppointmentById(@PathVariable Long id) {
        return service.findById(id);
    }


    // Create new appointment
    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return service.save(appointment);
    }


    // Delete appointment
    @DeleteMapping("/{id}")
    public String deleteAppointment(@PathVariable Long id) {
        return service.deleteById(id);
    }
}
