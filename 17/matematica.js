import comprimento from './circunferencia';

comprimento(2); // ~ 12,5

import { comprimento, raio, PI } from './circunferencia';

comprimento(2); // 12,5
raio(2); // ~ 12,5
console.log(PI); // 3.14

import * as circunferencia from './circunferencia';

circunferencia.comprimento(2); // ~ 12,5
circunferencia.raio(2); // ~ 12,5
console.log(circunferencia.PI); // 3.14
