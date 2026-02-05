import axios from 'axios';

export const todoAxios = axios.create({
  baseURL: process.env.TODO_API_URL,
  headers: { 'Access-Control-Allow-Origin': process.env.TODO_API_URL || '' },
});
