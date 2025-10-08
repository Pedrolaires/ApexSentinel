declare module 'antlr4' {
  export class InputStream {
    constructor(input: string);
  }
  export class CommonTokenStream {
    constructor(lexer: any);
  }
  export class Lexer {}
  export class Parser {}
  export const tree: any;
}
