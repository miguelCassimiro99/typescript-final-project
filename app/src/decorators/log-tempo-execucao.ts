export function logTempoExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            const t1 = performance.now();
            /* o this dentro do descriptor value equivale ao
            *  this da classe onde o mesmo é chamado
            *  então se chamei seria por exemplo:
            *  negociacao, view, em qual método for chamado
            * */
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Método ${propertyKey} executou em ${ emSegundos ? (t2 - t1)/1000 : (t2 - t1) } ${ emSegundos ? 'segundos' : 'milisegundos'}`);
            retorno;

            /*
            *   o método original em sua chamada pode receber parâmetros
            *   para isso, na function é passado um rest operator
            *   este operator deste modo
            *   transforma todos os paramentros em Array do tipo any
            *   Mas para o funcionamento, o método original
            *   precisa acessar o contexto this para utilizar os parametros
            *   então, foi adicionado o apply()
            *   Este apply() necessita do contexto e do argumentos
            *
            */

        }
        return descriptor;
    }
}
