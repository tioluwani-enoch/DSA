## travelling salesman brute force style where the start and end are always fixed in this case A is our start and end


from itertools import permutations

distance = [
    # A, B,  C,  D
    [0, 10, 15, 20],  # A
    [10, 0, 35, 25],  # B
    [15, 35, 0, 30],  # C
    [20, 25, 30, 0],  # D
]

cities = [1, 2, 3]  # cities to permute


def sum_distance(route):
    result = 0
    for i in range(len(route) - 1):
        result += distance[route[i]][route[i + 1]]
    return result


def travelling_salesman(cities):
    shortest_distance = float("inf")
    best_route = 0
    for perm in permutations(cities):
        route = [0] + list(perm) + [0]
        current_distance = sum_distance(route)
        print(f"Route: {route} → Distance: {current_distance}")

        if current_distance < shortest_distance:
            shortest_distance = current_distance
            best_route = route

    print("\nShortest route:", best_route)
    print("Shortest distance:", shortest_distance)


print(travelling_salesman(cities))

# without using python's inbuilt permutation function
# def generate_permutations(arr):
#     if len(arr) == 0:
#         return [[]]  # base case: one empty permutation

#     result = []
#     for i in range(len(arr)):
#         current = arr[i] # pick the ith value of the array
#         remaining = arr[:i] + arr[i+1:]  # all elements except arr[i]
#         for p in generate_permutations(remaining):
#             result.append([current] + p) add the ith value of the array + whatever we get from the generate_permutations

#     return result
