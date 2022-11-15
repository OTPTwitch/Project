function cart(basketAmount, countGoods, promo = null) { let totalAmount = basketAmount;
    if (promo = 'Акция при промокоде "ДАРИМ300":' && basketAmount < 300) {totalAmount = 0; console.log('Акция при промокоде "ДАРИМ300": ' + totalAmount + 'Р');}
    else if (promo = 'Акция при промокоде "ДАРИМ300":')
    {totalAmount -= 300; console.log('Акция при промокоде "ДАРИМ300": ' + totalAmount + 'Р');}
    if (countGoods >= 10) {const countFiveProcent = basketAmount/100*5; totalAmount -= countFiveProcent; console.log('Скидка 5%: ' + totalAmount + 'Р');}
    if (basketAmount > 50000) {const countTwentyProcent = totalAmount/100*20; const countDifference = totalAmount - 50000; totalAmount = countDifference - countTwentyProcent; console.log('Скидка 20%: ' + totalAmount + 'Р');}
    if (promo = 'Акция при промокоде "СКИДКА15%":' && basketAmount >= 20000) {const countFifteenProcent = totalAmount/100*15; totalAmount -= countFifteenProcent; console.log('Акция при промокоде "СКИДКА15%": ' + totalAmount +'Р'); }
    console.log('Общая стоимость товаров: ' + totalAmount + 'Р');}
cart(500000, 30, 'Акция при промокоде "ДАРИМ300":');