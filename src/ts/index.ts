// tslint:disable
import styles from '../sass/test.scss'
import { polyglot, locales } from '../str/polyglot.ts'
// tslint:enable
console.log(polyglot.t(locales.helloMichel))
console.log(polyglot.t(locales.helloYou))
console.log(polyglot.t(locales.helloMe))
