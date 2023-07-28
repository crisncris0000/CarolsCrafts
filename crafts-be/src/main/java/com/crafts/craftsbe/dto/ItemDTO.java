package com.crafts.craftsbe.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDTO {

    private MultipartFile[] imageData;

    private String itemTitle;

    private String itemDescription;

}
