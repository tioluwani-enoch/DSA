function simple_search(list, search) {
  for (let i = 0; i < list.length - 1; i++) {
    if (search == list[i]) {
      return `Found ${search} at index ${i} or position ${i + 1} in the list`;
    }
  }
  return "Not Found";
}

function binary_search(list, search) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (search > list[mid]) {
      low = mid + 1;
    } else if (search < list[mid]) {
      high = mid - 1;
    } else {
      return `Found ${search} at index ${mid} or position ${
        mid + 1
      } in the list`;
    }
  }

  return "Not Found";
}

// Create large list
const list = Array.from({ length: 20 }, (_, i) => i * 2);
const search = 20;

// ⏱️ Time simple search
console.log();
console.time("Simple Search Time");
console.log();
console.log(simple_search(list, search));
console.log();
console.timeEnd("Simple Search Time");
console.log();

// ⏱️ Time binary search
console.time("Binary Search Time");
console.log();
console.log(binary_search(list, search));
console.log();
console.timeEnd("Binary Search Time");
console.log();
