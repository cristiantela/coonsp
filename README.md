coonsp
======

Simplificando canvas....

##### v.1 - <https://raw.githubusercontent.com/mathues/coonsp/master/v-1/coonsp.js>
Metódos `src="https://cdn.rawgit.com/mathues/coonsp/master/v-1/coonsp.js"`
* `Coonsp.fps(novoFps);` - Define que a animação Coonsp deverá ter novoFps por segundos, quando inicializado um Coonsp o fps padrão será de 30 frames por segundo.
* `Coonsp.add(Elemento);` - Adiciona um elemento a reprodução de Coonsp onde elemento é um objeto que pode/deve conter as seguintes propriedades: name, x, y, type, content(no caso de type="text"), src(no caso de type="img"), rotate, ponto, e outros.
* `Coonsp.edi(Elemento[, Acrescenter]);` - Edita um elemento da reprodução de Coonsp, se acrescentar for `true`, os valores de elemento será somado com o já existente.
* `Coonsp.exc(Elemento);` - Exclui um elemento da reprudução de Coonsp onde Elemento.name deverá ser informado.
* `Coonsp.start();` - Inicializa o loop para canvas.
* `Coonsp.stop();` - Para o loop ativado com o metódo star() do Coonsp.
