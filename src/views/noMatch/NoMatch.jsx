import React from "react";
import { HeadProvider, Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

export default function NoMatch() {
  return (
    <div className="App">
      <HeadProvider>
        <div className="center">
          <Title>404 | Post</Title>
          <Meta
            content="Pagina de error 404"
            name="description"
          />
        </div>
      </HeadProvider>
      <header className="App-header">
        <img src={"/error-404.jpg"} alt="img" />
        <div className="center mt-2">
          <Link to="/">
            <Button styles={"btn button"}>Inicio</Button>
          </Link>
        </div>
      </header>
    </div>
  );
}
