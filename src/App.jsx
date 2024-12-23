import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "./hooks/user-auth";
import AuthListnerContext from "./context/UserAuthContext";
import * as ROUTES from "./constants/Route"

function App() {
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Login = lazy(() => import("./pages/Login"));
  const Profile = lazy(() => import("./pages/Profile"));
  const Signup = lazy(()=> import ("./pages/Signup"))
  const ExampleComponent = lazy(()=> import ("./pages/CheckerPAge"))
  const PageNotFound = lazy(() => import("./pages/PageNotFound"));
  const FlexPractice = lazy(()=> import ("./pages/FlexPractice"))

  const UserDetail = UserAuth()
  return (
    
    <AuthListnerContext.Provider value={{UserDetail}}>
    <Router basename="/Instgram_Full_Clone">
      <Suspense fallback={<h2> Loading.... </h2>}>
        <Routes>
          <Route path={ROUTES.Dashboard} element={<Dashboard />} />
          <Route path={ROUTES.Login} element={<Login />} />
          <Route path={ROUTES.Profile} element={<Profile />} />
          <Route path={ROUTES.Signup} element={<Signup />} />
          <Route path='/chhh' element={<ExampleComponent />} />
          <Route path='/flex' element={<FlexPractice />} />
          <Route path={ROUTES.PageNotFound} element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
    </AuthListnerContext.Provider>
    
  );
}

export default App;














