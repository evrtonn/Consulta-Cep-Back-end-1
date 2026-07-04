package br.com.escolanovaeratech.consulta_cep.exception;

import java.time.LocalDateTime;
import java.util.Objects;

public record ErrorResponse(
                LocalDateTime timestamp,
                int status,
                String error,
                String message,
                String path) {

        public ErrorResponse {
                Objects.requireNonNull(timestamp, "timestamp must not be null");
                Objects.requireNonNull(error, "error must not be null");
                Objects.requireNonNull(message, "message must not be null");
                Objects.requireNonNull(path, "path must not be null");
        }
}
