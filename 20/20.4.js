const { proxy, revoke } = Proxy.revocable(alvo, handler);

const { proxy, revoke } = Proxy.revocable({}, {});
proxy.teste = 'teste';

console.log(proxy.teste); // teste
revoke();
console.log(proxy.teste);
//TypeError: Cannot perform 'get' on a proxy that has been revoked
