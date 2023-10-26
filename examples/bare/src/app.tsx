// @refresh reload
import { MetaProvider } from "@solidjs/meta";
import { A, Routes } from "@solidjs/router";
import { DefaultErrorBoundary, FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import Provider from "./components/Provider";

export default function App() {
  return (
    <MetaProvider>
      <Provider initialCount={10}>
        <A href="/">Index</A>
        <A href="/about">About</A>
        <DefaultErrorBoundary>
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </DefaultErrorBoundary>
      </Provider>
    </MetaProvider>
  );
}
