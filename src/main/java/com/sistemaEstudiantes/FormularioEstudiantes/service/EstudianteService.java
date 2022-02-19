package com.sistemaEstudiantes.FormularioEstudiantes.service;

import com.sistemaEstudiantes.FormularioEstudiantes.model.Estudiante;

import java.util.List;

public interface EstudianteService {

    public Estudiante guardarEstudiante(Estudiante estudiate);
    public List<Estudiante> listarEstudiantes();

}
