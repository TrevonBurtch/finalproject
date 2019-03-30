import Content from './src/Content';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Store from './State/store';
import Navigo from 'navigo';
import { startCase } from 'lodash';

var router = new Navigo(location.origin);
var root = document.querySelector('root');
var store = new Store();

function render(state){
    root.innerHTML = `
      ${Content(state)}
      ${Header(state)}
      ${Navigation(state)}
      
      
    `;
    router.updatePageLinks();
}

function handleNavigation(params){
    var destination = startCase(params.page);

    store.dispatch((state) => Object.assign(state, { 'active': destination }));
}

store.addListener(render);

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();
  

