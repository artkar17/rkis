/*С помощью коллекций Set легко можно удалять дубли из массивов. Для этого массив нужно преобразовать в коллекцию Set. 
Так как эта коллекция не может содержать дубли элементов, то при преобразовании они исчезнут. 
Если затем преобразовать коллекцию обратно в массив, то мы получим массив без дублей.*/
//Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.
function NoDubl(arr) {
	let res = [...new Set(arr)];
	console.log(res);
  }
  let arr = [1, 2, 3, 1, 3, 4];
  console.log(arr);
  NoDubl(arr)