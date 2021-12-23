/*
Language: Datalog
Description: Datalog is a declarative logic programming language that syntactically is a subset of Prolog.
Author: Simon Johnston <johnstonskj@gmail.com>
Website: https://en.wikipedia.org/wiki/Datalog
*/

export default function(hljs) {

  const PREDICATE = {
    scope: 'title.function.invoke',
    begin: /[a-z][A-Za-z0-9_]*/,
    relevance: 0
  };

  const VAR = {
    scope: 'variable',
    variants: [
      {
        begin: /[A-Z][a-zA-Z0-9_]*/
      },
      {
        begin: /_/
      }
    ],
    relevance: 0
  };

  const BOOLEAN = {
    scope: 'literal',
    begin: /@(true|false)/
  };

  const SYMBOL_STRING = {
    scope: 'string',
    begin: /[a-z][A-Za-z0-9_]*(:[A-Za-z][A-Za-z0-9_]*)?/,
    contains: [ hljs.BACKSLASH_ESCAPE ],
    relevance: 0
  };

  const REL_TYPES = {
    scope: 'types',
    begin: /string|integer|boolean/,
    relevance: 1
  };

  const REL_SEPARATOR = {
    scope: 'punctuation',
    begin: /:/
  };

  const PRAGMA_LIST = {
    scope: 'punctuation',
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    contains: [
      REL_TYPES,
      REL_SEPARATOR,
      BOOLEAN,
      SYMBOL_STRING,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };

  const PRAGMA = {
    beginScope: 'meta',
    begin: /@[a-z]+/,
    end: /\./,
    contains: [
      PREDICATE,
      PRAGMA_LIST,
      hljs.QUOTE_STRING_MODE,
    ],
    relevance: 0
  };

  const TERM_LIST = {
    scope: 'punctuation',
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    contains: [
      VAR,
      BOOLEAN,
      SYMBOL_STRING,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };

  const IMPLICATION = {
    scope: 'keyword',
    begin: /:\-|<\-|⟵|\?\-?/
  };

  const CONNECTIVE = {
    scope: 'keyword',
    begin: /,|&|AND|∧|∨|OR|!|￢|NOT/
  };

  const COMPARISON_OP = {
    scope: 'operator',
    begin: /=|!=|\/=|<|<=|>|>=/
  };

  const LINE_TERMINATOR = {
    scope: 'punctuation',
    begin: /\./
  };

  return {
    name: 'Datalog',
    contains: [
      PRAGMA,
      PREDICATE,
      TERM_LIST,
      IMPLICATION,
      CONNECTIVE,
      COMPARISON_OP,
      LINE_TERMINATOR,
      hljs.HASH_COMMENT_MODE,
      VAR,
      BOOLEAN,
      SYMBOL_STRING,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}
