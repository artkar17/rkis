//Создайте коллекцию Set с начальными значениями 1, 2 и 3. Проверьте наличие в коллекции элемента со значением 3, а затем элемента со значением 4.
let set = new Set([1,2,3]);

console.log(set.has(3));
console.log(set.has(4));