export function BotaoFlutuante({ onClick, texto = '+'}) {
  const estilo = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    zIndex: 1000,
    borderRadius: '50%',
    color: '#ffffff',
    backgroundColor: 'var(--accent, #10b981)',
    fontSize: '32px',
    border: 'none',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, background-color 0.2s',
  };

  return (
    <button style={estilo} onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotaoFlutuante;