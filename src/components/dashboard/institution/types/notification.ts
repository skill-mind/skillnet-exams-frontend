// types/notification.ts

export type NotificationType =
  | "NEW_REGISTRATION"
  | "CERTIFICATE_VERIFICATION"
  | "REMINDER"
  | "GENERAL"
  | "NEW_SIGN_UP"
  | "EXAM_UPDATE";

export interface BaseNotification {
  id: string;
  type: NotificationType;
  createdAt: Date;
  userImage: string;
}

export interface ExamUpdateNotification extends BaseNotification {
  type: "EXAM_UPDATE";
  courseName: string;
}
export interface NewSignUpNotification extends BaseNotification {
  type: "NEW_SIGN_UP";
  accountName: string;
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

export interface UserNotification {
  id: string;
  avatar: string;
  header: string;
  message: string;
  course?: string;
  time: string;
  link: string;
  read: boolean;
}

export type Notifications =
  | NewRegistrationNotification
  | CertificateVerificationNotification
  | ReminderNotification
  | GeneralNotification
  | ExamUpdateNotification
  | NewSignUpNotification;
