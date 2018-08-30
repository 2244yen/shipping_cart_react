import androids from'./android.js';
import cameras from './camera.js';
import laptops from './laptop.js';

const list = [...laptops, ...cameras, ...androids];

export default list;