import api from './api';

export async function getAllActivities(token) {
  const response = await api.get('/activities/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getActivitiesByDay(token, params) {
  const response = await api.get(`/activities/${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postActivity(token, id) {
  const response = await api.post(
    '/activities/',
    { activityId: id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
