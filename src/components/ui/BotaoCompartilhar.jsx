//Adicionar toast ao copiar/compartilhar informação
export function BotaoCompartilhar({ 
  titulo = 'Compartilhar', 
  texto = '', 
  url = typeof window !== 'undefined' ? window.location.href : '', 
  children,
  estilo = {} 
}) {
  const handleShare = async () => {
    if (!texto && !url) {
      alert('Nenhum conteúdo informado para compartilhar.'); // Posso melhorar para verificar se a lista de tarefas está vazia
      return;
    }

    const dadosCompartilhamento = {
      title: titulo,
      text: texto,
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(dadosCompartilhamento);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Erro ao compartilhar:', err);
        }
      }
    } else {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(url || texto);
          alert('Tarefa(s) copiada(s) para a área de transferência!');
        } catch (err) {
          alert(`${texto}\n${url}`);
        }
      } else {
        alert(`${texto}\n${url}`);
      }
    }
  };

  const estiloPadrao = {
    backgroundColor: 'var(--accent, transparent)',
    border: 'none',
    color: 'var(--white, #ffffff)',
    cursor: 'pointer',
    padding: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...estilo,
  };

  return (
    <button onClick={handleShare} style={estiloPadrao} title={titulo}>
      {/* Exibe o conteúdo filho (como um ícone) ou um texto padrão */}
      {children || 'Compartilhar ➤'}
    </button>
  );
}

export default BotaoCompartilhar;