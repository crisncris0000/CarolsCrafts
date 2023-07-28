package com.crafts.craftsbe.service;

import com.crafts.craftsbe.models.Item;

import java.util.List;

public interface ItemService {

    List<Item> getItems();

    void deleteItem(Item item);

    void deleteItem(int id);

}
