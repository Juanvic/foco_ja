import GerenciadorDeTarefas from "../components/GerenciadorDeTarefas";
import BotaoFlutuante from "../components/ui/BotaoFlutuante";
import Todo from "./Todo";

export function Inicio() {
  const mensagem = () => {
    alert("Você clicou no botão!");
  };
  return (
    <>
      <div className="container">
        <p>Organize seu dia. Conclua o que importa.</p>
        <p>
          Sua lista de tarefas diárias simplificada para você focar no que
          realmente precisa ser feito.
        </p>
        <div className="intro ">
          <h1>Comece agora 🎯</h1>
          <p>
            Clique no botão <strong>+</strong> para começar
          </p>
          <div>
            <div className="border1"></div>
          </div>
        </div>
      </div>

      {/* <Todo /> */}
      <GerenciadorDeTarefas />
      <BotaoFlutuante onClick={mensagem} />
    </>
  );
}

export default Inicio;
