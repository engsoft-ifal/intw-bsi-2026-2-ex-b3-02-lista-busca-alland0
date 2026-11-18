// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function render(filtro = "") {
  const termo = filtro.trim().toLowerCase();

  const cursosFiltrados = cursos.filter((curso) =>
    curso.nome.toLowerCase().includes(termo)
  );

  if (cursosFiltrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
    return;
  }

  lista.innerHTML = cursosFiltrados
    .map((curso) => `<li>${curso.nome}</li>`)
    .join("");
}

render();

busca.addEventListener("input", () => {
  render(busca.value);
});