package br.com.escolanovaeratech.consulta_cep.controller;

import br.com.escolanovaeratech.consulta_cep.domain.CepDomain;
import br.com.escolanovaeratech.consulta_cep.service.CepService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/cep")
@CrossOrigin(origins = "http://localhost:5173")
public class ConsultaController {

    private final CepService cepService;

    public ConsultaController(CepService cepService) {
        this.cepService = cepService;
    }

    @GetMapping("/{cep}")
    public CepDomain consultaCep(@PathVariable("cep") String cep) {
        if (cep == null || !cep.matches("\\d{8}")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CEP inválido. Use 8 dígitos.");
        }
        return cepService.consultarCep(cep);
    }
}

