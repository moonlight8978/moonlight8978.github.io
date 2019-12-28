// @flow

declare module 'markdown-it' {
  declare type Token = {
    type: string,
    tag: string,
    content: string,
  }

  declare type MarkdownIt = {
    parse(mdContent: string): Array<Token>,
  }

  declare module.exports: () => MarkdownIt
}
