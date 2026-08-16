package com.example.wildrose.services;
import com.example.wildrose.repository.AppointmentRepository;
import com.example.wildrose.model.Appointment;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class AppointmentServices {
    private final AppointmentRepository repo;

    public AppointmentServices(AppointmentRepository repo) {
        this.repo = repo;
    }

    public List<Appointment> findAll() {
        return this.repo.findAll();
    }

    public Appointment save(Appointment appointment) {
        return this.repo.save(appointment);
    }

    public Appointment findById(Long id) {
        return this.repo.findById(id).orElseThrow(() -> new RuntimeException("Record not found"));
    }

    public String deleteById(Long id) {
        this.repo.deleteById(id);
        return "record deleted successfully";
    }
}