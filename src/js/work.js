import {technologies} from './objects';
import handlebars from "handlebars";
import makeTemplateTechnologies from "bundle-text:../templates/technologies-list.hbs";


const layout = handlebars.compile(makeTemplateTechnologies);
console.log(layout({technologies}))

document.querySelector('body').innerHTML = layout({technologies});
