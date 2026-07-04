package br.com.escolanovaeratech.consulta_cep.service;

import br.com.escolanovaeratech.consulta_cep.domain.CepDomain;
import br.com.escolanovaeratech.consulta_cep.exception.CepNotFoundException;
import org.springframework.http.HttpStatus;
import java.util.Objects;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Service
public class CepService {

    private final RestTemplate restTemplate;
    private static final String VIA_CEP_URL = "https://viacep.com.br/ws/%s/json/";

    public CepService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public CepDomain consultarCep(String cep) {
        try {
            String url = String.format(VIA_CEP_URL, cep);
            Objects.requireNonNull(url, "URL inválida");
            CepDomain cepDomain = Objects.requireNonNull(restTemplate.getForObject(url, CepDomain.class), "Resposta vazia do ViaCEP");
            if (cepDomain.getCep() == null || cepDomain.getCep().isBlank()) {
                throw new CepNotFoundException("CEP não encontrado: " + cep);
            }
            return cepDomain;
        } catch (HttpClientErrorException ex) {
            if (ex.getStatusCode() == HttpStatus.NOT_FOUND) {
                throw new CepNotFoundException("CEP não encontrado: " + cep, ex);
            }
            throw new RuntimeException("Erro ao consultar o serviço ViaCEP", ex);
        } catch (RestClientException ex) {
            throw new RuntimeException("Erro ao conectar com o serviço ViaCEP", ex);
        }
    }
}
