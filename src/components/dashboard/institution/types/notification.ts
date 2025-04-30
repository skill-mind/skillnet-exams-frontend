// types/notification.ts

export type NotificationType =
  | "NEW_REGISTRATION"
  | "CERTIFICATE_VERIFICATION"
  | "REMINDER"
  | "GENERAL";

export interface BaseNotification {
  id: string;
  type: NotificationType;
  createdAt: Date;
  userImage: string;
}

export interface NewRegistrationNotification extends BaseNotification {
  type: "NEW_REGISTRATION";
  courseName: string;
}

export interface CertificateVerificationNotification extends BaseNotification {
  type: "CERTIFICATE_VERIFICATION";
  certificateName: string;
}

export interface ReminderNotification extends BaseNotification {
  type: "REMINDER";
  event: string;
  dueDate: string;
}

export interface GeneralNotification extends BaseNotification {
  type: "GENERAL";
  message: string;
}

export type Notifications =
  | NewRegistrationNotification
  | CertificateVerificationNotification
  | ReminderNotification
  | GeneralNotification;
