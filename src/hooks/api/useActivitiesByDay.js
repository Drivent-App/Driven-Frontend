import useAsync from '../useAsync';
import useToken from '../useToken';
import * as activitiesApi from '../../services/activitiesApi';

export default function useActivitiesByDay() {
  const token = useToken();

  const {
    data: activitiesByDay,
    loading: activitiesByDayLoading,
    error: activitiesByDayError,
    act: getActivitiesByDay,
  } = useAsync((data) => activitiesApi.getActivitiesByDay(token, data), false);

  return {
    activitiesByDay,
    activitiesByDayLoading,
    activitiesByDayError,
    getActivitiesByDay,
  };
}
