import Todo from "./Todo";

function Inicio() {
  return (
    <>
      <div className="container">
        <p>Organize seu dia. Conclua o que importa.</p>
        <p>
          Sua lista de tarefas diárias simplificada para você focar no que
          realmente precisa ser feito.
        </p>
      </div>

      <Todo />
    </>
  );
}

export default Inicio;
