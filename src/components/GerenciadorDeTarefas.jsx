import React, { useState, useEffect } from "react";
import '../styles/GerenciadorDeTarefas.css'
import BotaoCompartilhar from "./ui/BotaoCompartilhar";

export function GerenciadorDeTarefas() {
  // Carrega do localStorage antes do primeiro carregamento da página
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    // Caso tenha algo salvo, converte de volta para Array (JSON.parse)
    // Se não, inicia com um array vazio []
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  const [textoInput, setTextoInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (e) => {
    e.preventDefault(); // Impede a página de recarregar ao enviar o formulário

    if (textoInput.trim() === "") return;

    const novaTarefa = {
      id: crypto.randomUUID(),
      texto: textoInput,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTextoInput("");
  };

  const removerTarefa = (idParaRemover) => {
    const listaFiltrada = tarefas.filter(
      (tarefa) => tarefa.id !== idParaRemover,
    );
    setTarefas(listaFiltrada);
  };

  const limparTudo = () => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja apagar todas as tarefas?",
    );

    if (confirmacao) {
      setTarefas([]); // Esvazia a lista no estado do React
      localStorage.removeItem("tarefas"); // Remove do localStorage do navegador
    }
  };

  return (
    <>
      <div
        className="box"
        
      >
        <h2>Minhas tarefas</h2>

        <form
          onSubmit={adicionarTarefa}
        >
          <input
            type="text"
            placeholder="Digite uma tarefa..."
            maxlength="27"
            value={textoInput}
            onChange={(e) => setTextoInput(e.target.value)}
          />
          <button
            type="submit"
            className="btnAdicionar"
          >
            Adicionar
          </button>
        </form>

        <div className="row" style={{paddingRight: '23px'}}>
          
          <button
            onClick={limparTudo}
            className="btnLimparTudo"
          >
            Apagar Tudo
          </button>

          <BotaoCompartilhar />
        </div>


        <ul style={{ listStyle: "none", padding: 0 }}>
          {tarefas.length === 0 ? (
            <p style={{ color: "#888" }}>Nenhuma tarefa cadastrada ainda.</p>
          ) : (
            tarefas.map((tarefa) => (
              <li
                key={tarefa.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span>{tarefa.texto}</span>
                <button
                  onClick={() => removerTarefa(tarefa.id)}
                  className="btnExcluir"
                >
                  Excluir
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
export default GerenciadorDeTarefas;
