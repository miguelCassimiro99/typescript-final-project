export function inspect(target, propertyKeys, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`-- Método: ${propertyKeys}`);
        console.log(`-- Argumentos: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`-- Retorno: ${JSON.stringify(retorno)}`);
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map