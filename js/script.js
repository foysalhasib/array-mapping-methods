document.getElementById('mapOutput').textContent = JSON.stringify([1, 2, 3].map(x => x ** 2));
document.getElementById('filterOutput').textContent = JSON.stringify([1, 2, 3, 4].filter(x => x % 2 === 0));
document.getElementById('reduceOutput').textContent = [1, 2, 3].reduce((acc, x) => acc + x, 0);

const forEachResult = [];
[1, 2, 3].forEach(x => forEachResult.push(x * 2));
document.getElementById('forEachOutput').textContent = JSON.stringify(forEachResult);

document.getElementById('findOutput').textContent = [1, 2, 3, 4].find(x => x > 2);
document.getElementById('findIndexOutput').textContent = [1, 2, 3, 4].findIndex(x => x > 2);
document.getElementById('everyOutput').textContent = [1, 2, 3].every(x => x > 0);
document.getElementById('someOutput').textContent = [1, -2, 3].some(x => x < 0);
document.getElementById('flatMapOutput').textContent = JSON.stringify([1, 2, [3, 4]].flatMap(x => (Array.isArray(x) ? x : [x])));
document.getElementById('sortOutput').textContent = JSON.stringify([3, 1, 2].sort((a, b) => a - b));
