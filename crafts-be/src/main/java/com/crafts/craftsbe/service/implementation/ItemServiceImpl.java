package com.crafts.craftsbe.service.implementation;

import com.crafts.craftsbe.models.Item;
import com.crafts.craftsbe.repository.ItemRepository;
import com.crafts.craftsbe.service.ItemService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    ItemRepository itemRepository;

    @Override
    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    @Override
    public void deleteItem(Item item) {
        itemRepository.delete(item);
    }

    @Override
    public void deleteItem(int id) {
        Optional<Item> res  = itemRepository.findById(id);

        Item item = res.orElseThrow(() -> new EntityNotFoundException("Item not found"));

        itemRepository.delete(item);
    }
}
