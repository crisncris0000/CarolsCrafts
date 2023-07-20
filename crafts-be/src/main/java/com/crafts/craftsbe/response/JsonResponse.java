package com.crafts.craftsbe.response;

import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@Builder
public class JsonResponse {

    private HttpStatus status;

    private String response;

}
