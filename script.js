/* variables */
let groupArray = [
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
var savedArray = JSON.parse(sessionStorage.getItem("savedArray"));
/* main code */
if (savedArray != null){
    console.log(savedArray);
    console.log(savedArray[0]);
    console.log(savedArray[0][0]);
    console.log(savedArray[0][0].item);
    groupArray = savedArray;
}

/* functions */
function addToCart(_itemGroup, _itemInfo){
    document.getElementById("output"+_itemGroup+_itemInfo).innerHTML = "<p>1x</p>"
    const FIELD_00 = document.getElementById("field00");
    thisField = Number(FIELD_00.value);
    console.log("running function addToCart");
    console.log("thisField: "+thisField);
    if (thisField < 1){
        var thisField = 1;
        console.log("thisField set to "+thisField);
    }
    console.log("if statemnet done")
    for (var a = 0; a < thisField; a++){
        groupArray[_itemGroup][_itemInfo].order++;
        console.log("for loop loop "+a);
    }
    var thisItem = groupArray[_itemGroup][_itemInfo];
    totalCost = totalCost + thisItem.cost;
    console.log("you have ordered "+thisItem.order+" "+thisItem.item+" for $"+(thisItem.cost*thisItem.order));
    console.log("the total cost of your cart is $"+totalCost);
    sessionStorage.setItem("savedArray", JSON.stringify(groupArray));
    savedArray = JSON.parse(sessionStorage.getItem("savedArray"));
    console.log(savedArray[_itemGroup][_itemInfo]);
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
        console.log("payment accepted");
        getReceipt(userMoney, userName);
    } else {
        console.log("you can not but this")
    }
}

function getReceipt(_userMoney, _userName){
    console.log("running fuction getReceipt");
    var order = savedArray;
    var change = _userMoney - totalCost;
    for (var i = 0; i < order.length; i++){
        for (var ii = 0; ii < order[i].length; ii++){
            if (order[i][ii].order > 0){
                console.log(order[i][ii].order+" "+order[i][ii].item+" costing $"+(order[i][ii].cost*order[i][ii].order))
            }
        }
    }
    console.log("total cost: $"+totalCost);
    console.log("change: $"+change);
    console.log("user: "+_userName);
}