var expect = require('chai').expect
var should = require('chai').should

var stockPrice = (prices) => {
    
    // prices must have length greater than 2
    // could write error handling

    var minPrice = prices.shift();
    var maxProfit = prices[1] - minPrice;
    prices.forEach(price => {
        let profit = (price - minPrice);
        maxProfit = Math.max(maxProfit, profit);
    	minPrice = Math.min(minPrice, price);
    })
    return maxProfit;
}

describe('stockPrice', () => {
    it('should work for normal prices', () => {
    	var prices = [20, 25, 30, 45, 10, 16, 20, 36];
    	expect(stockPrice(prices)).to.equal(26);
    })

	it('should work for descending stock prices', () => {
    var descendingPrices = [200, 199, 198, 197, 196, 195, 194, 10];
    expect(stockPrice(descendingPrices)).to.equal(-1);
	})
})
