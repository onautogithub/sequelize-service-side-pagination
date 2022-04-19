import http from '../http-common'

class TutorialDataService {
  // We modified the getAll call, you can see that we pass params object to GET method.
  // The params object will have one, two or all fields: title, page, size.
  getAll (params) {
    return http.get(`tutorials`, {params})
  }
  get (id) {
    return http.get(`/tutorials/${id}`)
  }
  create (data) {
    return http.post('/tutorials', data)
  }
  update (id, data) {
    return http.put(`/tutorials/${id}`, data)
  }
  delete (id) {
    return http.delete(`/tutorials/${id}`)
  }
  deleteAll () {
    return http.delete(`/tutorials`)
  }
  findByTitle (title) {
    return http.get(`/tutorials?title=${title}`)
  }
}

export default new TutorialDataService()
