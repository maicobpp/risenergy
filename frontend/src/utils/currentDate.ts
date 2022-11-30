import { removeTime } from './formatter';

export const currentDate = removeTime(new Date().toJSON());
