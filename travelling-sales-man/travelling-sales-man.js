// travelling salesman brute force style where the start and end are always fixed in this case A is our start and end

const distance = [
  // A, B,  C,  D
  [0, 10, 15, 20], // A
  [10, 0, 35, 25], // B
  [15, 35, 0, 30], // C
  [20, 25, 30, 0], // D
];

const cities = [1, 2, 3]; // cities to permute

function sum_distance(cities) {
  let result = 0;
  for (let i = 0; i < cities.length; i++) {
    if (i + 1 != cities.length) result += distance[cities[i]][cities[i + 1]];
  }
  return result;

  //or

  //   let result = 0;
  //   for (let i = 0; i < cities.length - 1; i++) {
  //     result += distance[cities[i]][cities[i + 1]];
  //   }
  //   return result;
}

function permutation(arr, current = [], results = []) {
  if (arr.length == 0) {
    results.push([...current]); // so if the length of the array given to us is less than 0, we want to return log wahtever we have in the permutaions which would be an array that signifies the end of a shuffle
  } else {
    for (let i = 0; i < arr.length; i++) {
      let duplicate = [...arr]; // making a duplicate of the arr because we do not want to screw up the loop process of our for loop
      let removed = duplicate.splice(i, 1)[0]; // so this duplicate mutates the current duplicate and assigns it to removed
      permutation(duplicate, [...current, removed], results); // then we call the function again after all this s a recurive way of handling permutation
    }
  }

  return results;
}

function travelling_salesman(cities) {
  let perms = permutation(cities); // let's get all the ways pathes that our salesman can travel e.g B,C,D, B,D,C remember A is always the start and the end
  let shortest_distance = Infinity; // for now infinity because that is the largest number that can be
  let best_path = [];

  for (let perm of perms) {
    let path = [0, ...perm, 0];
    let dist = sum_distance(path);
    if (dist < shortest_distance) {
      // check if the distance we got from the function sum_distance is smaller the shortest_distance if it is change the shortest_distance
      shortest_distance = dist;
      best_path = path;
    }
  }

  return { best_path, shortest_distance };
}

console.log(travelling_salesman(cities));
