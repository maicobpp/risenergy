import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    // eslint-disable-next-line max-len
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWNvYmVwcGxlckBnbWFpbC5jb20iLCJpYXQiOjE2NjY2NTE5MjUsImV4cCI6MTY2OTI0MzkyNSwic3ViIjoiMmQ5MTg0NjEtNTFkNS00ODkxLThkZGMtNGY2YzM5YjVjNmFlIn0.DvLOmSPTLjZVkMpRj4__T3uKetgJH-3tMsuLez2APlg',
    org_id: '44f20c08-747a-4566-9dbe-b1b35f579dfd',
  },
});
