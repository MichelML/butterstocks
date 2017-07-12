import * as Polyglot from 'node-polyglot'

export const polyglot = new Polyglot()
export const locales = {
  helloMichel: 'Hello Michel!',
  helloYou: 'Hello you!',
  helloMe: 'Hello me!'
}
polyglot.extend(locales)
