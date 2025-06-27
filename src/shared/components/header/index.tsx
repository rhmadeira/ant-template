import { useThemeStore } from "@/data/stores/theme-store";
import { Col, Input, Row, Typography } from "antd";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

interface IHeaderPageProps {
  title: string;
  placeholder?: string;
  showSearch?: boolean;
}

export default function HeaderPage({
  title,
  placeholder = "Pesquise",
  showSearch = true,
}: IHeaderPageProps) {
  const theme = useThemeStore((state) => state.theme);
  const [searchParams, setSearchParams] = useSearchParams();

  const inputValue = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      searchParams.set("search", value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  return (
    <Row
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: theme.token?.colorBgContainer,
        boxShadow: theme.token?.boxShadowSecondary,
      }}
    >
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.token?.colorPrimary,
          height: 120,
          width: "100%",
          padding: "0 20px",
          margin: 0,
        }}
      >
        <Col>
          <Typography.Title
            style={{
              color: theme.token?.colorTextLightSolid,
              margin: 0,
            }}
            level={2}
          >
            {title}
          </Typography.Title>
        </Col>
        <Col style={{ flex: 1 }} />
        {showSearch && (
          <Col>
            <Input.Search
              placeholder={placeholder}
              style={{
                minWidth: 300,
                width: 600,
              }}
              value={inputValue}
              onChange={handleSearch}
            />
          </Col>
        )}
      </Row>
    </Row>
  );
}
