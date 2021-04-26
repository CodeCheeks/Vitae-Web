import { create } from "./BaseService";

const http = create()

export const getReports = (elder_id) => {
  return http.get('/reports', { params: { id: elder_id } })
}

