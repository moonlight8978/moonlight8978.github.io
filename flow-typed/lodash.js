// @flow

declare module 'lodash' {
  declare type Zip<T, U> = Array<T | U>

  declare module.exports: {
    zip<T, U>(arr1: Array<T>, arr2: Array<U>): Array<Zip<T, U>>,
  }
}
