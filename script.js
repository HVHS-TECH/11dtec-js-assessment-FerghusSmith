console.log("running script.js");
/* variables */
/* to add a new item:
1. copy one line into the right group (ie. gyros)
2. replace the information (ie. name: "Chicken Gyros" to "Fish Gyros", cost: "20" to "25")
    DO NOT CHANGE THE ORDER VALUE!!!
    also make a new constant
3. add the order information on the HTML page */
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
var userName;
var userMoney;
var validName;
var validMoney;

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
    //this function runs when the user orders an item of food
    const FIELD_00 = document.getElementById("field00");
    const FIELD_01 = document.getElementById("field01");
    const FIELD_02 = document.getElementById("field02");
    const FIELD_03 = document.getElementById("field03");
    const FIELD_10 = document.getElementById("field10");
    const FIELD_11 = document.getElementById("field11");
    const FIELD_12 = document.getElementById("field12");
    const FIELD_13 = document.getElementById("field13");
    const FIELD_20 = document.getElementById("field20");
    const FIELD_21 = document.getElementById("field21");
    const FIELD_22 = document.getElementById("field22");
    const FIELD_23 = document.getElementById("field23");
    const FIELD_30 = document.getElementById("field30");
    const FIELD_31 = document.getElementById("field31");
    const FIELD_40 = document.getElementById("field40");
    const FIELD_41 = document.getElementById("field41");
    const FIELD_42 = document.getElementById("field42");
    const FIELD_50 = document.getElementById("field50");
    const FIELD_51 = document.getElementById("field51");
    const FIELD_52 = document.getElementById("field52");
    const FIELD_53 = document.getElementById("field53");
    if(_itemGroup = 0){
        if(_itemInfo = 0){
            thisField = (FIELD_00.value);
        }else if(_itemInfo = 1){
            thisField = (FIELD_01.value);
        }else if(_itemInfo = 2){
            thisField = (FIELD_02.value);
        }else if(_itemInfo = 3){
            thisField = (FIELD_03.value);
        }else 
    }else if(_itemGroup = 1){
        if(_itemInfo = 0){
            thisField = (FIELD_10.value);
        }else if(_itemInfo = 1){
            thisField = (FIELD_11.value);
        }else if(_itemInfo = 2){
            thisField = (FIELD_12.value);
        }else if(_itemInfo = 3){
            thisField = (FIELD_13.value);
        }else 
    }else if(_itemGroup = 2){
        if(_itemInfo = 0){
            thisField = (FIELD_20.value);
        }else if(_itemInfo = 1){
            thisField = (FIELD_21.value);
        }else if(_itemInfo = 2){
            thisField = (FIELD_22.value);
        }else if(_itemInfo = 3){
            thisField = (FIELD_23.value);
        }else 
    }else if(_itemGroup = 3){
        if(_itemInfo = 0){
            thisField = (FIELD_30.value);
        }else if(_itemInfo = 1){
            thisField = (FIELD_31.value);
        }
    }else if(_itemGroup = 4){
        if(_itemInfo = 0){
            thisField = (FIELD_40.value);
        }else if(_itemInfo = 1){
            thisField = (FIELD_41.value);
        }else if(_itemInfo = 2){
            thisField = (FIELD_42.value);
        }
    }else if(_itemGroup = 5){
        if(_itemInfo = 0){
            thisField = (FIELD_50.value);
        }else if(_itemInfo = 1){
            thisField = (FIELD_51.value);
        }else if(_itemInfo = 2){
            thisField = (FIELD_52.value);
        }else if(_itemInfo = 3){
            thisField = (FIELD_53.value);
        }else 
    } 
    var thisField = Number(FIELD_00.value);
    console.log("running function addToCart");
    console.log("thisField: "+thisField);
    //checking that the user didn't order outside of the boundaries
    if (thisField < 1 || thisField > 99){
        thisField = 0;
        console.log("thisField set to "+thisField);
        document.getElementById("output"+_itemGroup+_itemInfo).innerHTML = "<p>Invalid order</p>"
    }
    console.log("if statemnet done")
    //adding order to the correct object
    groupArray[_itemGroup][_itemInfo].order = groupArray[_itemGroup][_itemInfo].order + thisField;
    var thisItem = groupArray[_itemGroup][_itemInfo];
    totalCost = totalCost + thisItem.cost;
    console.log("you have ordered "+thisItem.order+" "+thisItem.item+" for $"+(thisItem.cost*thisItem.order));
    console.log("the total cost of your cart is $"+totalCost);
    sessionStorage.setItem("savedArray", JSON.stringify(groupArray));
    //saving the order so that the user can change pages without loosing their order
    savedArray = JSON.parse(sessionStorage.getItem("savedArray"));
    console.log(savedArray[_itemGroup][_itemInfo]);
    //outputing the order on the page so that the user knows how much they bought
    if(thisItem.order > 0){
        document.getElementById("output"+_itemGroup+_itemInfo).innerHTML = "<p>"+thisItem.order+"x "+thisItem.item+" costs $"+(thisItem.cost*thisItem.order)+"</p>"
    }else{
        document.getElementById("output"+_itemGroup+_itemInfo).innerHTML = ""
    }
}

function removeFromCart(_itemGroup, _itemInfo){
    //this function runs when the user removes items from their cart
    //checking that there are items to remove
    if(groupArray[_itemGroup][_itemInfo].order > 0){
        const FIELD_00 = document.getElementById("field00");
        var thisField = Number(FIELD_00.value);
        console.log("running function addToCart");
        console.log("thisField: "+thisField);
        //checking that the user is removing an amount within the boundaries
        if (thisField < 1 || thisField > 99){
            thisField = 0;
            console.log("thisField set to "+thisField);
        }
        console.log("if statemnet done")
        //updating the order
        groupArray[_itemGroup][_itemInfo].order = groupArray[_itemGroup][_itemInfo].order - thisField;
        //making sure that the user can't order negative food
        if(groupArray[_itemGroup][_itemInfo].order < 0){
            groupArray[_itemGroup][_itemInfo].order = 0;
        }
        var thisItem = groupArray[_itemGroup][_itemInfo];
        totalCost = totalCost - thisItem.cost;
        console.log("you have ordered "+thisItem.order+" "+thisItem.item+" for $"+(thisItem.cost*thisItem.order));
        console.log("the total cost of your cart is $"+totalCost);
        sessionStorage.setItem("savedArray", JSON.stringify(groupArray));
        //saving the order
        savedArray = JSON.parse(sessionStorage.getItem("savedArray"));
        console.log(savedArray[_itemGroup][_itemInfo]);
        //checking if the order is 0. If so, don't show the order on the page
        if(groupArray[_itemGroup][_itemInfo].order != 0){
            document.getElementById("output"+_itemGroup+_itemInfo).innerHTML = "<p>"+thisItem.order+"x "+thisItem.item+" costs $"+(thisItem.cost*thisItem.order)+"</p>"
        }else{
            document.getElementById("output"+_itemGroup+_itemInfo).innerHTML = ""
        }
    }
}

function orderFood(){
    //this function runs when the user orders their food
    console.log("running function orderFood")
    //pulling values from money and username inputs
    const MONEY_FIELD = (document.getElementById("moneyField"));
    const NAME_FIELD = document.getElementById("nameField");
    userMoney = MONEY_FIELD.value;
    userName = NAME_FIELD.value;
    //validating that the name is not a number
    validName = isNaN(userName.value);
    //checking if the username and money are valid
    if(validName == true & userMoney > 0){
        //username and money were valid
        console.log("userName: "+userName);
        console.log("userMoney: "+userMoney);
        //resetting total cost incase of earlier errors
        totalCost = 0;
        //adding the cost of every item ordered to the total cost
        for (var o = 0; o < savedArray.length; o++){
            for (var oo = 0; oo < savedArray[o].length; oo++){
                totalCost = totalCost + savedArray[o][oo].cost*savedArray[o][oo].order;
            }
        }
        //checking if the user had enough money
        if ((userMoney-totalCost) >= 0){
            //user had enough money. Reciept can be printed
            console.log("payment accepted");
            getReceipt(userMoney, userName);
        } else {
            //user didn't have enough money
            console.log("you can not but this")
            document.getElementById("receiptOutput").innerHTML += "<p>you can not buy this</p>"
        }
    } else {
        //username or usermoney or both were invalid
        if(validName == false){
            //username was invalid
            document.getElementById("receiptOutput").innerHTML += "<p>invalid username</p>"
        }
        if(userMoney < 0){
            //money was invalid
            document.getElementById("receiptOutput").innerHTML += "<p>invalid money</p>"
        }
    }
}

function getReceipt(_userMoney, _userName){
    //this function prints the receipt
    console.log("running fuction getReceipt");
    order = savedArray;
    //calculating change
    var change = _userMoney - totalCost;
    document.getElementById("receiptOutput").innerHTML = "<p>you are "+_userName+"</p>";
    document.getElementById("receiptOutput").innerHTML += "<p>you ordered:</p>";
    //checking each item for order. if order is more than 0 then it prints as part of the receipt
    for (var i = 0; i < order.length; i++){
        //item group
        for (var ii = 0; ii < order[i].length; ii++){
            //specific item in group
            if (order[i][ii].order > 0){
                //item has been ordered
                totalCost = totalCost + (order[i][ii].cost*order[i][ii].order);
                console.log(order[i][ii].order+" "+order[i][ii].item+" costing $"+(order[i][ii].cost*order[i][ii].order))
                document.getElementById("receiptOutput").innerHTML += "<p>"+order[i][ii].order+" "+order[i][ii].item+" $"+(order[i][ii].order*order[i][ii].cost)+"</p>"
            }
        }
    }
    //printing money values
    document.getElementById("receiptOutput").innerHTML += "<p>total cost:"+totalCost+"</p>"
    document.getElementById("receiptOutput").innerHTML += "<p>your money: "+_userMoney+"</p>"
    document.getElementById("receiptOutput").innerHTML += "<p>your change: "+(_userMoney-totalCost)+"</p>"
    console.log("total cost: $"+totalCost);
    console.log("change: $"+change);
}
function clearCart(){
    //this function gets rid of every order
    console.log("running function 'clearCart'");
    //setting every order to 0
    for (var o = 0; o < savedArray.length; o++){
        //item group
        for (var oo = 0; oo < savedArray[o].length; oo++){
            //specific item in group. setting to 0
            savedArray[o][oo].order = 0;
            console.log(savedArray[o][oo].item+": order set to 0");
            document.getElementById("output"+o+oo).innerHTML = "" 
        }
    }
    totalCost = 0;
    groupArray = savedArray;
    sessionStorage.setItem("savedArray", JSON.stringify(groupArray));
    console.log("cart cleared")
    console.log(savedArray);
}