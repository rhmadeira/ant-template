import React, { useMemo } from "react";
import { Button, notification, Space } from "antd";
import {
  IPropsOpenNotification,
  IPropsOpenNotificationMutation,
  NotificationContext,
} from "../context/notification-context";

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const open = ({
    type = "info",
    message,
    description,
    otherOptions,
  }: IPropsOpenNotification) => {
    api[type]({
      message,
      description,
      placement: "topRight",
      duration: 5,
      ...otherOptions,
    });
  };

  const openMutation = ({
    key,
    message,
    description,
    onCancel,
    onSuccess,
  }: IPropsOpenNotificationMutation) => {
    api.open({
      key,
      message,
      description,
      placement: "topRight",
      type: "info",
      duration: 0,
      btn: (
        <Space>
          <Button
            type="link"
            size="small"
            onClick={() => {
              api.destroy();
              onCancel?.();
            }}
          >
            Cancelar
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              api.destroy(key);
              onSuccess();
            }}
          >
            Confirmar
          </Button>
        </Space>
      ),
    });
  };

  const contextValue = useMemo(
    () => ({ open, contextHolder, openMutation }),
    []
  );

  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
