import { RootState } from './RootState';

export type { RootState };

export type AjaxErrorPayload = {
  message?: string;
  statusCode?: number;
} | null;
