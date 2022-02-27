export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype: ${target.constructor.name}
        e adicionando getter a ${propertyKey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento com seletor ${seletor}
                para adicionar a ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
