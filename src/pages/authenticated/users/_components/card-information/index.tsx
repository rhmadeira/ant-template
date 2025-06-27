import { Card } from "antd";

export default function CardInformation() {
  return (
    <Card title="Informações do Usuário" style={{ marginBottom: 16 }}>
      <Card.Meta
        description="Selecione um Usuário na tabela para editar."
        style={{
          marginBottom: 16,
        }}
      />

      <Card.Meta
        description="Para criar um usuário, utilize o botão 'Criar Grupo' na parte superior da tabela."
        style={{ marginBottom: 16 }}
      />
      <Card.Meta
        description="Você deve clicar em salvar para que as alterações sejam aplicadas."
        style={{ marginBottom: 16 }}
      />
    </Card>
  );
}
