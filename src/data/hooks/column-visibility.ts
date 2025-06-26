import { useMemo, useState } from "react";
import type { TableColumnsType } from "antd";

export interface IColumnVisibilityOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export function useColumnVisibility<T>(
  columns: TableColumnsType<T>,
  persistKey?: string // opcional: se quiser salvar no localStorage
) {
  const defaultVisible = useMemo(
    () => columns.filter((col) => !col.hidden).map((col) => col.key as string),
    [columns]
  );

  const [visibleColumns, setVisibleColumns] = useState<string[]>(() => {
    if (persistKey) {
      const stored = localStorage.getItem(persistKey);
      if (stored) return JSON.parse(stored);
    }
    return defaultVisible;
  });

  // opcional: salvar no localStorage
  const setVisibleAndPersist = (val: string[]) => {
    if (persistKey) {
      localStorage.setItem(persistKey, JSON.stringify(val));
    }
    setVisibleColumns(val);
  };

  const filteredColumns = useMemo(
    () => columns.filter((col) => visibleColumns.includes(col.key as string)),
    [columns, visibleColumns]
  );

  const filterOptions: IColumnVisibilityOption[] = useMemo(
    () =>
      columns.map((col) => ({
        label: col.title as string,
        value: col.key as string,
        disabled: col.key === "id" || col.key === "actions",
      })),
    [columns]
  );

  return {
    visibleColumns,
    setVisibleColumns: setVisibleAndPersist,
    filteredColumns,
    filterOptions,
  };
}
