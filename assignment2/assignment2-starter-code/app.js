(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    
    toBuy.itemName = "";
    toBuy.itemQuantity = "";

    toBuy.removeItem = function (itemIndex){
        ShoppingListCheckOffService.addAlreadyBoughtItem(itemIndex);
    }

    toBuy.listItems = ShoppingListCheckOffService.getToBuyItems();
    
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

    var alreadyBought = this;

    alreadyBought.listItems = ShoppingListCheckOffService.getAlreadyBoughtItems();

};

function ShoppingListCheckOffService(){
    var service = this;

    var toBuyListItems = [
        {
            name: "fries",
            quantity: 10
        },
        {
            name: "chocolates",
            quantity: 4
        },
        {
            name: "milks",
            quantity: 6
        },
        {
            name: "soaps",
            quantity: 2
        },
        {
            name: "mangoes",
            quantity: 7
        }
    ];

    var alreadyBoughtListItems = [];

    service.addToBuyItem = function(itemName, quantity){
        var item = {
            name: itemName,
            quantity: quantity
        }
        toBuyListItems.push(item);
    };

    service.addAlreadyBoughtItem = function(itemIndex){
        var item = toBuyListItems[itemIndex];
        toBuyListItems.splice(itemIndex, 1);
        var boughtItem = {
            name: item.name,
            quantity: item.quantity
        };
        alreadyBoughtListItems.push(boughtItem);
    }
    
    service.getToBuyItems = function(){
        return toBuyListItems;
    }

    service.getAlreadyBoughtItems = function(){
        return alreadyBoughtListItems;
    }


};
})();