query getMenuItems($id: ID) {
    getmenuItems(id: $id) {
        name
        description

        ... on ITEM {
            bread
            glutenfree
        }
        ... on DRINK {
            alchoholic
        }
    }
}

mutation changeMenuPriceAndAvailability($id: ID, $price: Int, $availability: Boolean) {
    changePrice(id:$ID, price: $price,availability: $avaialability) {
        name
        itemId
        price
        availability
    }
}

fragment DRINK {
    alcho
}