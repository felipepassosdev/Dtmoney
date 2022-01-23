import axios from 'axios';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

axios.defaults.adapter = require('axios/lib/adapters/http');
