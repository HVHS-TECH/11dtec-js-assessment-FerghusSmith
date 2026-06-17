console.log("Hello world!")

let GroupArray = [
    /*Gyros*/[
        {item: "Chicken Gyros", cost: 20, order: 0},
        {item: "Beef Gyros", cost: 20, order: 0},
        {item: "Pork Gyros", cost: 20, order: 0},
        {item: "Mixed Gyros", cost: 20, order: 0}
    ], 
    /*Souvlaki*/[
        {item: "Chicken Souvlaki", cost: 20, order: 0},
        {item: "Beef Souvlaki", cost: 20, order: 0},
        {item: "Pork Souvlaki", cost: 20, order: 0},
        {item: "Mixed Souvlaki", cost: 20, order: 0}
    ],
    /*Drinks*/[
        {item: "Coca-cola", cost: 3, order: 0},
        {item: "Sprite", cost: 3, order: 0},
        {item: "L&P", cost: 3, order: 0},
        {item: "Diet Coke", cost: 3, order: 0}
    ],
    /*sides*/[
        {item: "Hot Chips w Tzatziki", cost: 6, order: 0},
        {item: "Calamari", cost: 8, order: 0}
    ],
    /*vege*/[
        {item: "Greek salad", cost: 15, order: 0},
        {item: "Mousaka", cost: 15, order: 0},
        {item: "Yemista", cost: 10, order: 0}
    ],
    /*desserts*/[
        {item: "Baklava", cost: 5, order: 0},
        {item: "Galaktoboureko", cost: 5, order: 0},
        {item: "Revani", cost: 5, order: 0},
        {item: "Ice cream", cost: 5, order: 0}
    ]
];
var totalCost = 0;

function addToCart(_itemGroup, _itemInfo){
    console.log("running function addToCart");
    GroupArray[_itemGroup][_itemInfo].order++;
    var thisItem = GroupArray[_itemGroup][_itemInfo];
    totalCost = totalCost + thisItem.cost;
    console.log("you have ordered "+thisItem.order+" "+thisItem.item+" for $"+(thisItem.cost*thisItem.order));
    console.log("the total cost of your cart is $"+totalCost);
    return totalCost;
}

function orderFood(){
    console.log("running function orderFood")
    const MONEY_FIELD = document.getElementById("moneyField");
    const NAME_FIELD = document.getElementById("nameField");
    userMoney = MONEY_FIELD.value;
    userName = NAME_FIELD.value;
    console.log("userName: "+userName);
    console.log("userMoney: "+userMoney);
    if (totalCost <= userMoney){
        console.log("you can buy this")
    } else {
        console.log("you can not but this")
    }
}
