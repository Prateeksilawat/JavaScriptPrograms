//Best_Time_to_Buy_and_Sell_Stock

function BuyAndSell(prices){
 
    let buyPrice = prices[0]
    let profit = 0

    for(let i=1;i<prices.length;i++){

        if(prices[i]<buyPrice){
            buyPrice = prices[i]
        }else{
            let currentProfit = prices[i]-buyPrice
            profit = Math.max(currentProfit,profit)
        }
    }
    return profit
}

let prices = [7,1,5,3,6,4]

console.log(BuyAndSell(prices));
