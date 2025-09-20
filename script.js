// Script básico para alertar ao clicar em contato
document.addEventListener("DOMContentLoaded", () => {
    const contato = document.querySelector("#contato");
    contato.addEventListener("click", () => {
      console.log("Seção de contato visualizada");
    });
  });

// Dados de exemplo (você pode substituir pelos dados reais)
const transparenciaData = {
  2023: [
    { nome: "Relatório Financeiro - Jan", arquivo: "relatorios/2023/jan.pdf" },
    { nome: "Relatório Financeiro - Fev", arquivo: "relatorios/2023/fev.pdf" }
  ],
  2024: [
    { nome: "Relatório Financeiro - Jan", arquivo: "relatorios/2024/jan.pdf" },
    { nome: "Relatório de Atividades", arquivo: "relatorios/2024/atividades.pdf" }
  ]
};

// Referência aos elementos da página
const select = document.getElementById("year-select");
const lista = document.getElementById("files-list");

// Preenche o select com os anos disponíveis
Object.keys(transparenciaData).sort().reverse().forEach(ano => {
  const option = document.createElement("option");
  option.value = ano;
  option.textContent = ano;
  select.appendChild(option);
});

// Escuta mudança no select
select.addEventListener("change", () => {
  const ano = select.value;
  lista.innerHTML = ""; // Limpa a lista antes de mostrar os novos itens

  if (transparenciaData[ano]) {
    const ul = document.createElement("ul");
    ul.style.paddingLeft = "20px";

    transparenciaData[ano].forEach(item => {
      const li = document.createElement("li");
      li.style.marginBottom = "10px";

      const a = document.createElement("a");
      a.href = item.arquivo;
      a.target = "_blank";
      a.style.textDecoration = "none";
      a.style.color = "#1e90ff";
      a.style.fontWeight = "bold";
      a.onmouseover = () => a.style.textDecoration = "underline";
      a.onmouseout = () => a.style.textDecoration = "none";

      const icon = document.createElement("i");
      icon.className = "fas fa-file-alt";
      icon.style.marginRight = "8px";

      const text = document.createTextNode(item.nome);

      a.appendChild(icon);
      a.appendChild(text);
      li.appendChild(a);
      ul.appendChild(li);
    });

    lista.appendChild(ul);
  }
});

function toggleFolder(element) {
  const fileList = element.querySelector('.file-list');
  const isVisible = fileList.style.display === 'block';
  fileList.style.display = isVisible ? 'none' : 'block';
}


  document.querySelectorAll('.ano-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('ativo');
    });
  });

function toggleFolder(element) {
  const fileList = element.querySelector('.file-list');
  const isVisible = fileList.style.display === 'block';

  // Alterna visibilidade da lista de arquivos
  fileList.style.display = isVisible ? 'none' : 'block';

  // Pega o texto atual e troca o ícone
  let texto = element.childNodes[0].nodeValue.trim();

  if (texto.startsWith('📁')) {
    element.childNodes[0].nodeValue = texto.replace('📁', '📂');
  } else if (texto.startsWith('📂')) {
    element.childNodes[0].nodeValue = texto.replace('📂', '📁');
  }
}


