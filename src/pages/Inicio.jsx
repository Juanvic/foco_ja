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
        {/* <p>
        O FocoJá é o gerenciador de tarefas simples e sem distrações feito para
        você planejar a sua rotina, eliminar pendências e manter a produtividade
        do dia a dia.
      </p> */}
      </div>

      <Todo />
    </>
  );
}

export default Inicio;
