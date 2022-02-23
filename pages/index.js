import Head from "../components/layout/Head";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";
import Button from "../components/ui/Button";
import Link from "next/link";
import { socialNetworks } from "../utils/data";
import { useTranslation } from "../i18n";

function Home({ className }) {
  const { t } = useTranslation(["index-page", "common"]);

  return (
    <div className={className}>
      <Head />

      <Row className="container-home">
        <Col
          xs="12"
          sm="6"
          className="d-flex justify-content-center flex-column container-info-row"
        >
          {/*<p>{t('title')},</p>*/}
          {/*<p>{t('subtitle')} <span className="resalt-c-letter">C</span>ristian,</p>*/}
          <p>
            <span className="resalt-c-letter">C</span>ristian Cano
          </p>
          <hr className="name-separator" />
          <p>{t("profession")}</p>

          <div>
            <Link href="/about">
              <Button className="ccdv-btn">
                {t("common:button.see-more")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button color="#ffa300" className="ccdv-btn">
                {t("common:button.contact")}
              </Button>
            </Link>
          </div>

          <div className="container-social-networks-idx">
            {socialNetworks.map((el, idx) => (
              <a key={idx} href={el.link} target="_blank" title={el.title}>
                {/*<img src={el.img}/>*/}
                <i className={el.icon} />
              </a>
            ))}
          </div>
        </Col>

        <Col
          xs="12"
          sm="6"
          className="d-flex justify-content-center align-items-center flex-column container-img-ccdv container-info-row"
        >
          <img
            src="/img/ccdv-avatar.png"
            alt="criscan-avatar"
            className="ccdv-img-avatar"
          />
        </Col>
      </Row>
    </div>
  );
}

export default styled(Home)`
  color: #fff;

  .container-home {
    height: 100vh;
    padding: 0 90px;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
      padding: 0 10px;
    }

    p {
      font-family: ${(props) => props.theme.fontFamily.primary};
      font-size: 3.8em;
      line-height: 70px;

      @media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
        font-size: 2.2em;
        line-height: 30px;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        font-size: 2em;
        line-height: 30px;
      }

      .resalt-c-letter {
        color: ${(props) => props.theme.colors.secondary};
        font-size: 2em;
      }

      &:first-child {
        margin-bottom: 0.2rem;
      }
    }

    .name-separator {
      border: 3px solid ${(props) => props.theme.colors.secondary};
      width: 100%;
      margin-bottom: 20px;
    }

    .container-info-row {
      @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
        flex: 0 0 100%;
        max-width: 100%;
        align-items: center;
        text-align: center;
      }

      .container-social-networks-idx {
        display: none;
        margin-top: 15px;

        @media (max-height: 640px) {
          display: flex;
        }

        @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
          display: flex;
        }

        a {
          padding: 7px 0;
          font-size: 20px;
          color: ${(props) => props.theme.colors.lightColor};
          margin-right: 10px;

          &:hover {
            color: ${(props) => props.theme.colors.secondary};
          }

          img {
            width: 25px;
            height: auto;
            margin: 0 auto;
          }
        }
      }
    }

    .ccdv-btn {
      &:last-child {
        margin-left: 1em;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
        font-size: 1.2em;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
        margin: 0;
        font-size: 1em;
        &:first-of-type {
          margin-right: 20px;
        }
      }

      @media (max-width: ${(props) => props.theme.breakpoints.btwlgmd}px) {
        &:last-child {
          margin-left: 5px;
        }
      }

      @media (max-width: ${(props) => props.theme.breakpoints.btwmdsm}px) {
        &:last-child {
          margin-left: 0;
        }
      }

      @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
        &:first-of-type {
          margin: 5px;
        }
      }
    }

    .container-img-ccdv {
      @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
        justify-content: flex-start !important;
      }

      .ccdv-img-avatar {
        width: 90%;
        height: auto;
        @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
          width: 40%;
        }
        @media (max-width: ${(props) => props.theme.breakpoints.xs}px) {
          width: 60%;
        }
      }
    }
  }
`;
