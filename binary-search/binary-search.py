import time
import math

# Start time before simple search
time_start = time.time()


def simple_search(list, search):
    for index, item in enumerate(list):
        if item == search:
            print()  # i am doing this for space
            return (
                f"Found {search} at index {index} or position {index + 1} in the list"
            )

    return "Not Found"


# Your list and search target
list = list(range(0, 10_000_000, 2))  # Even numbers from 0 to 9,999,998
search = 9998

# Run simple search
print(simple_search(list, search))

# Time after simple search and before binary search
middle_time = time.time()


def binary_search(list, search):
    low = 0  # this points at the the index position
    high = len(list) - 1  # this is also points at the index position

    # i need to have equals to here because if it comes to be that low = 3 and high = 3 I want to be able to check the mindex position 3
    while low <= high:
        mid = (low + high) // 2

        if search > list[mid]:
            low = (
                mid + 1
            )  # i do this to shrink the search space if i do not do this the
        elif search < list[mid]:
            high = (
                mid - 1
            )  # i do this also to shrink the search space if I do not do this
        else:
            print()  # doing this for space
            return f"Found {search} at index {mid} or position {mid + 1} in the list"

    return "Not Found"


# Run binary search
print(binary_search(list, search))

# End time after binary search
time_end = time.time()

# Show timings
print()  # calling this for space
print(f"Time taken for simple search: {middle_time - time_start:.10f} seconds")
print()  # calling this for space
print(f"Time taken for binary search: {time_end - middle_time:.10f} seconds")
print()  # calling this for space
