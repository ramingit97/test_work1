import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import SuspenseLoader from './components/Loader';
import BaseLayout from './layouts/BaseLayout';


const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<p>Loading</p>}>
      <Component {...props} />
    </Suspense>
);



const MessagesList = Loader(lazy(()=>import('./features/messages/components/MessageList')))
// const Chat = Loader(lazy(()=>import('./features/messages/components/Test')))

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <MessagesList />
      },
      // {
      //   path: '/chat',
      //   element: <Chat />
      // },
    ]
    }
];

export default routes;