import { createContext, useContext } from "react";
import type { NotificationArgsProps } from "antd";

export interface IPropsOpenNotification {
  type?: NotificationArgsProps["type"];
  message: NotificationArgsProps["message"];
  description: NotificationArgsProps["description"];
  otherOptions?: Omit<
    NotificationArgsProps,
    "message" | "description" | "type"
  >;
}

export interface IPropsOpenNotificationMutation {
  key: string;
  message: string;
  description: string;
  onCancel?: () => void;
  onSuccess: () => void;
}

export interface NotificationContextProps {
  open: (props: IPropsOpenNotification) => void;
  openMutation: (props: IPropsOpenNotificationMutation) => void;
  contextHolder: React.ReactNode;
}

export const NotificationContext = createContext<
  NotificationContextProps | undefined
>(undefined);

export const useToast = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
