import getMdTableOfContents from '../get-md-table-of-contents'

test('parse TOC correctly', () => {
  const data = `# [1](https://google.com.vn)
introduction
## 1.1
text
## 1.2
text
### 1.2.1
text
### 1.2.2
text
# 2
## 2.1
text
## 2.2
text`
  const headings = getMdTableOfContents(data)
  expect(headings).toEqual([
    [['[1](https://google.com.vn)'], [['1.1'], ['1.2']]],
    [['2'], [['2.1'], ['2.2']]],
  ])
})
