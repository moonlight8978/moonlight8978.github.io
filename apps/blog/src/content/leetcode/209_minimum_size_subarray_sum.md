---
difficulty: Medium
---

My first approach was to gradually increase the `window_size` and check if the subarray has `sum >= target`. And boom, **`Time Limit Exceeded`** :smiling_face_with_tear: it turned out to be too slow

It's a brute force method, so it runs through redundant cases that we can exclude by traversing our sliding window.

Start with `window_size = 0`, and increase it until you find the first matching `window_size`. Then, exclude the leftmost element, one by one, to find the minimum `window_size`.

The main idea is that if the sum of [i, k] is greater than or equal to the `target`, we don't need to check [i, k+m]. If `sum < target`, slide the window to the right by 1, and repeat the process.
