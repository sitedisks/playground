import React from "react";
import ReactDom from "react-dom";
import FormContainer from "./js/components/container/FormContainer.jsx";

const wrapper = document.getElementById('create-article-form');
wrapper? ReactDom.render(<FormContainer />, wrapper):false;
