function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  for (waitTaim of customers) {
    const lowersWaitTill = tills.indexOf(Math.min(...tills));
    tills[lowersWaitTill] += waitTaim;
  }
  return Math.max(...tills);
}
console.log(queueTime([1, 2, 3, 4], 1));
