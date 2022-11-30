import {Money} from './money';

export interface Portfolio {
    add(money:Money[]): void
    getMoney(): Money[]
}
