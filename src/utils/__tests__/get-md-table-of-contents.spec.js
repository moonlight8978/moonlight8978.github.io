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
    { h1: ['[1](https://google.com.vn)'], h2s: [['1.1'], ['1.2']] },
    { h1: ['2'], h2s: [['2.1'], ['2.2']] },
  ])
})
