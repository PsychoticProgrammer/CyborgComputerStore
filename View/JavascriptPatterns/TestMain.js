import {Ram} from './domain/components/Ram.js';
import {ProductBuilder} from './builder/ProductBuilder.js';

var builder = ProductBuilder.create(new Ram(14));
console.log(builder.code("15").model("SIUUU").name("RAM").build().getSize());