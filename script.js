console.log("Hello world!")

let GroupArray = [
    /*Gyros*/[
        {item: "Chicken Gyros", cost: 20}, 
        {item: "Beef Gyros", cost: 20}, 
        {item: "Pork Gyros", cost: 20}, 
        {item: "Mixed Gyros", cost: 20}
    ], 
    /*Souvlaki*/[
        {item: "Chicken Souvlaki", cost: 20}, 
        {item: "Beef Souvlaki", cost: 20}, 
        {item: "Pork Souvlaki", cost: 20}, 
        {item: "Mixed Souvlaki", cost: 20}
    ],
    /*Drinks*/[
        {item: "Coca-cola", cost: 3}, 
        {item: "Sprite", cost: 3}, 
        {item: "L&P", cost: 3}, 
        {item: "Diet Coke", cost: 2}
    ],
    /*sides*/[
        {item: "Hot Chips w Tzatziki", cost: 6}, 
        {item: "Calamari", cost: 8}
    ],
    /*vegetables*/[
        {item: "Greek salad", cost: 15}, 
        {item: "Mousaka", cost: 15}, 
        {item: "Yemista", cost: 10}
    ],
    /*desserts*/[
        {item: "Baklava", cost: 5}, 
        {item: "Galaktoboureko", cost: 5}, 
        {item: "Revani", cost: 5}, 
        {item: "Ice cream", cost: 5}
    ]
];

function addToCart(_itemGroup, _itemSubGroup){
    console.log("running addToCart");
    let itemCost = GroupArray[_itemGroup][_itemSubGroup][item];
    let itemName = GroupArray[_itemGroup][_itemSubGroup][cost];
    console.log(itemCost);
    console.log(itemName);

}