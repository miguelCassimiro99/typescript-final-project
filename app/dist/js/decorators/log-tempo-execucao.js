export function logTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Método ${propertyKey} executou em ${emSegundos ? (t2 - t1) / 1000 : (t2 - t1)} ${emSegundos ? 'segundos' : 'milisegundos'}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=log-tempo-execucao.js.map