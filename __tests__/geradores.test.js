import geraSenha from "../src/modules/geradores";

describe("Função geraSenha", () => {
  // Teste 1: Verificar o tamanho da senha
  test("deve gerar senha com o tamanho correto", () => {
    const senha = geraSenha(12, true, true, true, true);
    expect(senha).toHaveLength(12); // Verifica o tamanho da senha gerada
  });

  // Teste 2: Verificar se a senha tem pelo menos uma maiúscula
  test("deve gerar senha contendo pelo menos uma maiúscula", () => {
    const senha = geraSenha(10, true, false, false, false);
    expect(senha).toMatch(/[A-Z]/); // Verifica se tem pelo menos uma maiúscula
  });

  // Teste 3: Verificar se a senha tem pelo menos uma minúscula
  test("deve gerar senha contendo pelo menos uma minúscula", () => {
    const senha = geraSenha(10, false, true, false, false);
    expect(senha).toMatch(/[a-z]/); // Verifica se tem pelo menos uma minúscula
  });

  // Teste 4: Verificar se a senha tem pelo menos um número
  test("deve gerar senha contendo pelo menos um número", () => {
    const senha = geraSenha(10, false, false, true, false);
    expect(senha).toMatch(/\d/); // Verifica se tem pelo menos um número
  });

  // Teste 5: Verificar se a senha tem pelo menos um símbolo
  test("deve gerar senha contendo pelo menos um símbolo", () => {
    const senha = geraSenha(10, false, false, false, true);
    expect(senha).toMatch(/[!@#$%¨&*()_+=`[\]{}~^,<.>;:/?]/); // Verifica se tem pelo menos um símbolo
  });
});
