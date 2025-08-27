---
difficulty: Easy
---

The first time I read the problem, the straightforward solution that comes to my mind is using a Hash Map.

However, at the end of the question, we see this line:

> Follow-up: Could you solve the problem in linear time and in O(1) space?

A Hash Map requires O(n) space, so it's definitely not the best answer. After racking my brain, I gave up, haha. Then I discovered [Moore's Voting Algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm).

The main idea of the algorithm is: if the majority element does exist, then its count will be greater than $$\tfrac{n}{2}$$, so $$count - (n - count) > 0$$
