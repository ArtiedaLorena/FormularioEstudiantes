package com.sistemaEstudiantes.FormularioEstudiantes.repository;

import com.sistemaEstudiantes.FormularioEstudiantes.model.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteRepository extends JpaRepository <Estudiante, Integer> {
}
