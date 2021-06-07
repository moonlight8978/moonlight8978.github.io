# Functional Programming

> Last updated: 2021-01-27

## Monad & Functor

### Monad

- Is any of type `U<T>`, has "bind" method which take a function `f(T) => U<V>` and returns `U<V>`

* Example:

  * If/else

    ```haskell
    case getUser 17 of
          Nothing -> Nothing 
          Just user ->
             case getAddress user of
                Nothing -> Nothing 
                Just address ->
                  getStreetName address
    ```

  * Monad

    ```haskell
    do
      user <- getUser 17
      addr <- getAddress user
      getStreetName addr
    ```

  * Underthehood

    * `getUser 17` returns `Maybe<User>`: Monad U `Maybe`, T `Integer`, V `User`

    * then `getAddress(User) => Maybe(Address)` is apply to `Maybe<User>`

      `bind` will be called on `Maybe<User>` and returns `Maybe(Address)`

    * finally `getStreetName(Address) => Maybe<StreetName>` is applied

    * `bind` must handle the happy case (when `T` is expected type), and the unhappy case (when `T` is unexpected type - each monad will define and handle differently)

### Functor

