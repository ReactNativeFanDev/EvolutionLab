import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';
import { Alert } from 'react-native';

interface RTKQueryError {
  status: number | string;
  data?: any;
  error?: string;
}

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      const { payload } = action;
      const errorPayload = payload as RTKQueryError;

      let errorMessage = 'Произошла ошибка';

      // Обработка сетевых ошибок
      if (errorPayload?.error) {
        errorMessage = errorPayload.error;
      }
      // Обработка ошибок с сервера
      else if (errorPayload?.data) {
        if (typeof errorPayload.data === 'string') {
          errorMessage = errorPayload.data;
        } else if (errorPayload.data.message) {
          errorMessage = errorPayload.data.message;
        } else {
          errorMessage = `Ошибка ${errorPayload.status || ''}`;
        }
      }
      // Обработка статусных ошибок
      else if (errorPayload?.status) {
        errorMessage = `Ошибка ${errorPayload.status}`;
      }

      Alert.alert('Ошибка', errorMessage);
    }

    return next(action);
  };
