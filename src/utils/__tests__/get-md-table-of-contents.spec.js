import getMdTableOfContents from '../get-md-table-of-contents'

describe('when data is nested', () => {
  it('parse correctly', () => {
    const data = `# 1
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
    const tokens = getMdTableOfContents(data)
    debugger
  })
})
