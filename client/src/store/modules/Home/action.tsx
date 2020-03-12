import { action } from 'typesafe-actions';

export const loadRequest = () => action('@home/LOAD_REQUEST');

export const loadSuccess = (data: any[]) =>
  action('@home/LOAD_SUCCESS', { data });
