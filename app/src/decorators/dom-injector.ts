export function domInjector(seletor: string){
    return function (
        target: any,
        propertyKey: string,
    ) {
        console.log(`Modificando prototype: ${target.constructor.name}
        e adicionando getter a ${propertyKey}`);

        let elemento: HTMLElement | null = null;

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLInputElement>document.querySelector(seletor);

                console.log(`Buscando elemento com seletor ${seletor}
                para adicionar a ${propertyKey}`);

            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {
                get: getter
            }
        );
    }
}
