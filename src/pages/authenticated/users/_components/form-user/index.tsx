import InputCustom from "@/shared/components/form/input-custom";
import { Controller, UseFormReturn } from "react-hook-form";
import { Form, Skeleton } from "antd";
import { IUserForm } from "@/data/services/user/interface";
import CheckboxCustom from "@/shared/components/form/checkbox-custom";

interface IFormUserProps {
  form: UseFormReturn<IUserForm, unknown>;
  loading?: boolean;
}

export default function FormUser({ form, loading }: IFormUserProps) {
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
              <Skeleton.Input active size="small" style={{ width: "100%" }} />
            ) : (
              <InputCustom {...field} />
            )}
          </Form.Item>
        )}
      />
      <Controller
        name="email"
        control={form.control}
        defaultValue=""
        rules={{
          required: "Campo obrigatório",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email inválido",
          },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            hasFeedback
            label="Email"
            validateStatus={fieldState.error ? "error" : ""}
            help={fieldState.error ? fieldState.error.message : ""}
          >
            {loading ? (
              <Skeleton.Input active size="small" style={{ width: "100%" }} />
            ) : (
              <InputCustom {...field} />
            )}
          </Form.Item>
        )}
      />
      <Controller
        name="admin"
        control={form.control}
        defaultValue={false}
        render={({ field }) => (
          <Form.Item label="Admin" valuePropName="checked" layout="horizontal">
            {loading ? (
              <Skeleton.Input active size="small" style={{ width: "100%" }} />
            ) : (
              <CheckboxCustom
                {...field}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          </Form.Item>
        )}
      />
    </>
  );
}
