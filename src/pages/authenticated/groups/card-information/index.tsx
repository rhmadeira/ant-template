import { Card } from "antd";

export default function CardInformation() {
  return (
    <Card title="Informações do Grupo" style={{ marginBottom: 16 }}>
      <Card.Meta
        description="Selecione um grupo na tabela para editar."
        style={{
          marginBottom: 16,
        }}
      />

      <Card.Meta
        description="Para criar um novo grupo, utilize o botão 'Criar Grupo' na parte superior da tabela."
        style={{ marginBottom: 16 }}
      />
      <Card.Meta
        description="Você deve clicar em salvar para que as alterações sejam aplicadas."
        style={{ marginBottom: 16 }}
      />
    </Card>
  );
}
