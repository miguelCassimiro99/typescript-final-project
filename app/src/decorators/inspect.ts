export function inspect(
    target: any,
    propertyKeys: string,
    descriptor: PropertyDescriptor,
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: Array<any>) {
        console.log(`-- Método: ${propertyKeys}`);
        console.log(`-- Argumentos: ${JSON.stringify(args)}`)
        /// executa metodoOriginal
        const retorno = metodoOriginal.apply(this, args);
        console.log(`-- Retorno: ${JSON.stringify(retorno)}`);
    }

    return descriptor;
}

/* Caso o decorator não receba nenhum parâmetro
   o módulo pode exportar direto a função decorator
   Mas caso isso seja realizado, ao utilizar o módulo
   o mesmo não pode ser utilizado seguido de ()
 */
