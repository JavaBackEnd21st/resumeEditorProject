import { Button, Form, Input, Tooltip } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import CustomFooter from "../../components/footer";

const SignUp = () => {
  let [submitForm] = useForm();
  const onSubmitForm = ({ email, password }) => {
    console.log(email, password);
  };

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
            height: "80%",
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
            <div className="signUpInnerContent" style={{ marginTop: "10vh" }}>
              <div>
                <span style={{ fontSize: "28px" }}>가입을 환영합니다!</span>
              </div>
              <div
                className="subMessage"
                style={{ color: "rgb(143,143,143)", marginTop: "5%" }}
              >
                <p>이메일과 비밀번호로 간편하게 시작해요!</p>
              </div>
              <div className="buttonWrapper" style={{ marginTop: "15%" }}>
                <div className="signUpForm">
                  <Form form={submitForm} onFinish={onSubmitForm}>
                    <Form.Item
                      name="email"
                      style={{ marginBottom: "3%" }}
                      rules={[
                        () => ({
                          validator(_, value) {
                            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            let emailCheck = emailRegex.test(value);
                            if (!value) {
                              return Promise.reject(
                                new Error("이메일을 입력해 주세요!")
                              );
                            } else if (!emailCheck) {
                              return Promise.reject(
                                new Error("이메일 형식을 확인해 주세요!")
                              );
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input size="large" placeholder="이메일 입력" />
                    </Form.Item>
                    <Form.Item
                      style={{ marginBottom: "3%" }}
                      name="password"
                      rules={[
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            let pattern = /[!@#$%^&*()]/;
                            let patternCheck = pattern.test(value);
                            if (!value) {
                              return Promise.reject(
                                new Error("비밀 번호를 입력해 주세요!")
                              );
                            } else if (!patternCheck) {
                              return Promise.reject(
                                new Error("특수문자를 포함해 주세요!")
                              );
                            } else if (value.length < 8) {
                              return Promise.reject(
                                new Error("비밀번호는 8자 이상이어야 합니다!")
                              );
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input
                        size="large"
                        type="password"
                        placeholder="비밀번호 입력"
                      />
                    </Form.Item>
                    <Form.Item
                      name="passwordConfirm"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "비밀번호를 입력해 주세요!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error("비밀 번호를 확인해 주세요!")
                            );
                          },
                        }),
                      ]}
                    >
                      <Input
                        size="large"
                        type="password"
                        placeholder="비밀번호 확인"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        size="large"
                        style={{
                          width: "100%",
                          backgroundColor: "rgb(32,201,151)",
                          color: "white",
                        }}
                      >
                        회원가입
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
                <div>
                  <span>이미 계정이 있으신가요?</span>
                  <Link
                    className="backToLogin"
                    to="/auth/login"
                    style={{
                      color: "black",
                      marginLeft: "5px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    로그인
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default SignUp;
