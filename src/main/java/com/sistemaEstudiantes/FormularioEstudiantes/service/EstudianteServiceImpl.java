package com.sistemaEstudiantes.FormularioEstudiantes.service;

import com.sistemaEstudiantes.FormularioEstudiantes.model.Estudiante;
import com.sistemaEstudiantes.FormularioEstudiantes.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstudianteServiceImpl implements EstudianteService {

    @Autowired
    private EstudianteRepository estudianteRespository;

    @Override
    public Estudiante guardarEstudiante(Estudiante estudiante) {
        return estudianteRespository.save(estudiante);
    }

    @Override
    public List<Estudiante> listarEstudiantes() {
        return estudianteRespository.findAll();
    }
}
