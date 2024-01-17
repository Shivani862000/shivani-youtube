import { Body } from "./components/Body";
import { Head } from "./components/Head";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { Watch } from "./components/Watch";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
     {
      path:"watch",
      element:<Watch/>
     },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
