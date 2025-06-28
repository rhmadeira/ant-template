import InputCustom from "@/shared/components/form/input-custom";
import { Controller, UseFormReturn } from "react-hook-form";
import { Form, Skeleton } from "antd";
import { IGroupForm } from "@/data/services/group/interface";

interface IFormGroupProps {
  form: UseFormReturn<IGroupForm, unknown>;
  loading?: boolean;
}

export default function FormGroup({ form, loading }: IFormGroupProps) {
  return (
    <>
      <Controller
        name="nome"
        control={form.control}
        defaultValue=""
        rules={{
          required: "Campo obrigatório",
          minLength: {
            value: 6,
            message: "Mínimo de 6 caracteres",
          },
          maxLength: {
            value: 50,
            message: "Máximo de 50 caracteres",
          },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            hasFeedback
            label="Nome"
            validateStatus={fieldState.error ? "error" : ""}
            help={fieldState.error ? fieldState.error.message : ""}
          >
            {loading ? (
              <Skeleton.Input active style={{ width: "100%" }} />
            ) : (
              <InputCustom {...field} />
            )}
          </Form.Item>
        )}
      />
      <Controller
        name="descricao"
        control={form.control}
        defaultValue=""
        rules={{
          required: "Campo obrigatório",
          minLength: {
            value: 6,
            message: "Mínimo de 6 caracteres",
          },
          maxLength: {
            value: 100,
            message: "Máximo de 100 caracteres",
          },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            hasFeedback
            label="Descrição"
            validateStatus={fieldState.error ? "error" : ""}
            help={fieldState.error ? fieldState.error.message : ""}
          >
            {loading ? (
              <Skeleton.Input active style={{ width: "100%" }} />
            ) : (
              <InputCustom {...field} />
            )}
          </Form.Item>
        )}
      />
    </>
  );
}
