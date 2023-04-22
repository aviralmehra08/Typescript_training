var reviews = [1, 2, 3, 4, 5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}
var average = total / 5;
console.log(total);
console.log(average);
