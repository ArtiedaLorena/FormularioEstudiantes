package com.sistemaEstudiantes.FormularioEstudiantes.controller;

import com.sistemaEstudiantes.FormularioEstudiantes.model.Estudiante;
import com.sistemaEstudiantes.FormularioEstudiantes.service.EstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/estudiante")
@CrossOrigin
public class EstudianteController {

    @Autowired
    private EstudianteService estudianteService;

    @PostMapping("/agregar")
    public String add(@RequestBody Estudiante estudiante){
        estudianteService.guardarEstudiante(estudiante);
        return "Nuevo estudiante ha sido agregado";
    }

    @GetMapping("/listar")
    public List<Estudiante> listarEstudiantes(){
        return estudianteService.listarEstudiantes();
    }
}
