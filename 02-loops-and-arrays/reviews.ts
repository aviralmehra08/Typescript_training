let reviews: number[] = [1, 2, 3, 4, 5];
let total:number = 0;
for(let i=0;i<reviews.length;i++){
    console.log(reviews[i]);
    total = total + reviews[i];
}
let average: number = total/5;
console.log(total);
console.log(average);