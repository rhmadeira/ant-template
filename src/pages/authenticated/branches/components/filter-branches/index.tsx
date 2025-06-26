import InputCustom from "@/shared/components/form/input-custom";
import { Col, Row, Tag, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterBranches() {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [CNPJ, setCNPJ] = useState<string>("");
  const [inscricao, setInscricao] = useState<string>("");

  const tagsData = ["Física", "Jurídica"];
  function handleChange(tag: string, checked: boolean): void {
    if (checked) {
      setSelectedTag(tag);
    } else {
      setSelectedTag("");
    }
  }

  useEffect(() => {
    if (selectedTag) {
      searchParams.set("typePerson", selectedTag);
    } else {
      searchParams.delete("typePerson");
    }
    setSearchParams(searchParams);
  }, [selectedTag, searchParams, setSearchParams]);

  useEffect(() => {
    if (CNPJ) {
      searchParams.set("cnpj", CNPJ);
    } else {
      searchParams.delete("cnpj");
    }
    setSearchParams(searchParams);
  }, [CNPJ, searchParams, setSearchParams]);

  useEffect(() => {
    if (inscricao) {
      searchParams.set("inscricao", inscricao);
    } else {
      searchParams.delete("inscricao");
    }
    setSearchParams(searchParams);
  }, [inscricao, searchParams, setSearchParams]);

  return (
    <Row style={{ marginBottom: 16 }}>
      <Col span={24}>
        <Typography.Title level={4} style={{ marginBottom: 16 }}>
          Filtros:
        </Typography.Title>
      </Col>
      <Col span={24}>
        <InputCustom
          label="CNPJ"
          value={CNPJ}
          onChange={(e) => setCNPJ(e.target.value)}
          placeholder="Digite o CNPJ"
          maxLength={14}
          style={{ width: "100%" }}
        />
      </Col>
      <Col span={24} style={{ marginBottom: 8, marginTop: 8 }}>
        <InputCustom
          label="Inscrição"
          value={inscricao}
          onChange={(e) => setInscricao(e.target.value)}
          placeholder="Digite a Inscrição"
          maxLength={14}
          style={{ width: "100%" }}
        />
      </Col>

      <Col span={24}>
        {tagsData.map<React.ReactNode>((tag) => (
          <Tag.CheckableTag
            key={tag}
            checked={selectedTag === tag}
            onChange={(checked) => handleChange(tag, checked)}
            style={{
              backgroundColor: selectedTag === tag ? "#1890ff" : "#f0f0f0",
            }}
          >
            {tag}
          </Tag.CheckableTag>
        ))}
      </Col>
    </Row>
  );
}
