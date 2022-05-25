import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

const HomeScreen = lazy(() => import("./pages/Home/Home"))

function Approutes() {
  return (
    <Routes>
      
      <Route path="/" element={
        <Suspense fallback={<div>Chargement...</div>}>
          <HomeScreen /> 
        </Suspense>} 
      />
    </Routes>
  );
}

export default Approutes;