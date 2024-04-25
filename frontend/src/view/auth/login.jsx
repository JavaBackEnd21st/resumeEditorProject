import { Avatar, Button, Divider, Form, Input } from "antd";
import { Link } from "react-router-dom";
import CustomFooter from "../../components/footer";

const Login = () => {
  return (
    <div style={{ marginTop: "5vh" }}>
      <div
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "36px" }}
      >
        Resume Editor
      </div>
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          className="signUpWrpper"
          style={{
            width: "40vw",
            height: "60%",
            border: "1px solid rgb(224,224,224)",
            marginTop: "5vh",
          }}
        >
          <div
            className="signUpInnerWrapper"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="formWrapper"
              style={{ marginTop: "10%", width: "60%" }}
            >
              <Form>
                <Form.Item style={{ marginBottom: "2%" }}>
                  <Input
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="이메일 입력"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="비밀번호 입력"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "rgb(31,201,151)",
                      fontWeight: "bold",
                      fontSize: "16px",
                      height: "50px",
                    }}
                  >
                    로그인
                  </Button>
                </Form.Item>
              </Form>
              <Divider
                orientation="center"
                style={{ color: "rgb(200,200,200)" }}
              >
                또는
              </Divider>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#00C73C",
                  color: "white",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  height: "50px",
                }}
              >
                <Avatar size={30} src={"/img/naver_icon.png"} />
                네이버 로그인
              </Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  textDecoration: "underline",
                  marginTop: "10px",
                }}
              >
                <Link to="/auth/signup">
                  <span style={{ color: "black" }}>회원가입</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default Login;
