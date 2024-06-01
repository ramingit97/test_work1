import {
    useFetch,
    usePost,
  } from '../../../utils/reactQuery';
  import {
    IMessage,
  } from '../interfaces';
  import { pathToUrl } from '../../../utils/router';
import { apiRoutes } from 'src/apiKeys';
  export const useGetAppointmentsList = () =>
    useFetch<IMessage[]>(apiRoutes.getMessageList);
  
  export const useGetAppointment = (id: number) =>
    useFetch<IMessage>(pathToUrl(apiRoutes.getMessageList, { id }));
  
  export const useAddMessage = () => usePost<any[], any>(apiRoutes.addMessage);
  
  
  