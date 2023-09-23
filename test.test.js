const gerarURLImagem = require('./src/main.js');

test('A função gerarURLImagem existe', () => {
  expect(gerarURLImagem).toBeDefined()
  expect(typeof gerarURLImagem).toBe("function");
});

test('Removendo espaço extras', () => {
  const titulo = "  Temperatura  "
  const url = gerarURLImagem(titulo)
  expect(url).toBe("temperatura.jpg")
});

test('A URL deve terminar com a extensão jpg', () => {
  expect(gerarURLImagem("a")).toBe("a.jpg")
});

test('Removendo caracteres especiais ', () => {
  expect(gerarURLImagem("áàâãáàâã")).toBe("aaaaaaaa.jpg")
  expect(gerarURLImagem("éèêéèê")).toBe("eeeeee.jpg")
  expect(gerarURLImagem("óõóóõó")).toBe("oooooo.jpg")
});

test('A URL deve ter letras minúsculas', () => {
  expect(gerarURLImagem("AbCdEfG")).toBe("abcdefg.jpg")
});

test('Uma URL não pode possuir espaço em branco entre palavras', () => {
  const titulo = "hoje cedo faltou energia"
  expect(gerarURLImagem(titulo)).toBe("hoje_cedo_faltou_energia.jpg")
});

test('URL nova a a partir de titulo complexo', () => {
  const titulo =  " Amanhã cedo o jogador partirá em seu jato com destino indefinido _"
  expect(gerarURLImagem(titulo)).toBe("amanha_cedo_o_jogador_partira_em_seu_jato_com_destino_indefinido__.jpg")
});
