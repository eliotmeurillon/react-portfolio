import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  portfoliogenre,
  meta,
  dataportfolioweb,
  dataportfoliodes,
} from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className=".sec_sp_port">
          <Col lg="5">
            <h3 className="color_sec py-4">{portfoliogenre.title.first}</h3>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolioweb.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link} target="_blank" rel="noreferrer noopener">
                    voir le projet
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <Row className=".sec_sp_port">
          <Col lg="5">
            <h3 className="color_sec py-4">{portfoliogenre.title.second}</h3>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfoliodes.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link} target="_blank" rel="noreferrer noopener">
                    voir le projet
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
