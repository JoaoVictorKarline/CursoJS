// Algo que pode ser feito outra vez / Repetir / Percorrer Elemento por elemento
// Arrays, Strings, Map, Set são iteráveis
// Um objeto é iterável quando consegue acessar elementos da coleção
// Oferece o método next que pode indicar o próximo ítem da sequência

let valores = [1,2,4,7]
let iterador_valores = valores[Symbol.iterator]()

console.log(valores)
console.log(iterador_valores.next())
console.log(iterador_valores.next())
console.log(iterador_valores.next())
console.log(iterador_valores.next())
console.log(iterador_valores.next())

// Done false é porque ainda está no elemento
// Done verdadeiro quando finaliza a repetição de elemento por elemento (iterar)