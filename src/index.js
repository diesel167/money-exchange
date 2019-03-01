// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) {
        return {};
    }
    if (currency > 10000){
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }

    let cash={};
    let H = Math.floor(currency / 50);
    currency -= H * 50;

    let Q = Math.floor(currency / 25);
    currency -= Q * 25;

    let D = Math.floor(currency / 10);
    currency -= D * 10;

    let N = Math.floor(currency / 5);
    currency -= N * 5;

    let P = Math.floor(currency / 1);

    if (H > 0) {cash.H = H}
    if (Q > 0) {cash.Q = Q}
    if (D > 0) {cash.D = D}
    if (N > 0) {cash.N = N}
    if (P > 0) {cash.P = P}
    return cash;

}
