/*
O que significa a expressão true && !(false || true)?

Dentro dos parênteses, temos false || true. Isso significa que pelo menos uma das condições é verdadeira, então a expressão dentro dos parênteses é verdadeira.

O operador de negação ! inverte o valor booleano da expressão dentro dele, então !(false || true) resulta em !true, que é false.

Agora, temos true && false. O operador && (AND) só retorna true se ambos os lados da expressão forem verdadeiros. Neste caso, um dos lados é false, então o resultado final é false.
*/