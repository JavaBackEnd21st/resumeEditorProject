import { Button, Form, Input } from "antd";
import { PlusSquareOutlined, MinusSquareOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";

const ResumeEdit = () => {
  const [questionList, setQuestionList] = useState([]);
  const [awardList, setAwardList] = useState([]);
  const [careerList, setCareerList] = useState([]);

  const [questionForm] = useForm();
  const [awardForm] = useForm();
  const [careerForm] = useForm();

  const handleQuestionList = ({ control, idx, questionType }) => {
    if (control == "plus") {
      // if (questionType == "question") {
      //   let newQuestionList = [...questionList];
      //   newQuestionList.push(0);
      //   setQuestionList(newQuestionList);
      // } else if (questionType == "award") {
      //   let newAwardList = [...awardList];
      //   newAwardList.push(0);
      //   setAwardList(newAwardList);
      // } else if (questionType == "career") {
      //   let newCareerList = [...careerList];
      //   newCareerList.push(0);
      //   setCareerList(newCareerList);
      // }
    } else {
      // let newQuestionList = [...questionList];
      // newQuestionList.splice(idx, 1);
      // setQuestionList(newQuestionList);
    }
  };

  const FormFormat = ({ title, questionArray, questionType, formType }) => {
    return (
      <div>
        <span style={{ fontWeight: "bold" }}>{title}</span>
        <Form style={{ marginTop: "2%" }} form={formType}>
          <Form.Item
            key={`${title}extraQuestion${0}`}
            style={{ marginBottom: "2%", width: "100%" }}
          >
            <div style={{ display: "flex" }}>
              <PlusSquareOutlined
                onClick={() => {
                  handleQuestionList({ control: "plus", idx: 1, questionType });
                }}
                style={{ marginRight: "1%" }}
              />
              <Input
                placeholder="내용을 입려하세요"
                defaultValue={questionArray[0]}
              />
            </div>
          </Form.Item>
          {questionArray.map((question, idx) => {
            return (
              <Form.Item
                key={`${title}extraQuestion${idx + 1}`}
                name={`${title}extraQuestion${idx + 1}`}
                style={{ marginBottom: "2%", width: "100%" }}
              >
                <div style={{ display: "flex" }}>
                  <MinusSquareOutlined
                    onClick={() => {
                      handleQuestionList({
                        control: "minus",
                        idx: idx,
                        questionType,
                      });
                    }}
                    style={{ marginRight: "1%" }}
                  />
                  <Input placeholder="내용을 입려하세요" />
                </div>
              </Form.Item>
            );
          })}
        </Form>
      </div>
    );
  };
  return (
    <div>
      <div
        className="wrppaer"
        style={{ backgroundColor: "rgb(250,250,250)", height: "100%" }}
      >
        <div
          className="upperFormWrapper"
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "5%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="comapnyInfoForm"
            style={{
              width: "40%",
              backgroundColor: "rgb(245,245,245)",
              padding: "1% 3%",
              borderRadius: "10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>지원회사 정보</span>
            <Form style={{ marginTop: "2%" }}>
              <Form.Item name="companyName" style={{ marginBottom: "2%" }}>
                <Input placeholder="회사명" />
              </Form.Item>
              <Form.Item name="positionTitle" style={{ marginBottom: "2%" }}>
                <Input placeholder="지원 직무" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="직무 세부사항" />
              </Form.Item>
            </Form>
          </div>
          <div
            className="questionTitle"
            style={{
              width: "45%",
              backgroundColor: "rgb(245,245,245)",
              padding: "1% 3%",
              borderRadius: "10px",
            }}
          >
            <FormFormat
              title="자기소개서 항목"
              questionArray={questionList}
              questionType="question"
              formType={questionForm}
            />
          </div>
        </div>
        <div
          className="lowerFormWrapper"
          style={{
            padding: "2% 10%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="awardInfoForm"
            style={{
              width: "40%",
              backgroundColor: "rgb(245,245,245)",
              padding: "1% 3%",
              borderRadius: "10px",
            }}
          >
            <FormFormat
              title="수상 경력"
              questionArray={awardList}
              questionType="award"
              formType={awardForm}
            />
          </div>
          <div
            className="careerInfoForm"
            style={{
              width: "45%",
              backgroundColor: "rgb(245,245,245)",
              padding: "1% 3%",
              borderRadius: "10px",
            }}
          >
            <FormFormat
              title="직무 관련 경험"
              questionArray={careerList}
              questionType="career"
              formType={careerForm}
            />
          </div>
        </div>
        <div
          className="gptWrapper"
          style={{
            display: "flex",
            padding: "2% 10%",
            justifyContent: "space-between",
          }}
        >
          <div className="userInputWrapper" style={{ width: "45%" }}>
            <span style={{ fontWeight: "bold" }}>
              이곳에 내용을 입력하세요!
            </span>
            <div
              className="userInputBox"
              style={{
                width: "100%",
                padding: "2% 2%",
                border: "1px solid rgb(200,200,200)",
                boxShadow: "3px 3px 3px rgb(200,200,200)",
              }}
            ></div>
          </div>
          <div
            className="gptResultWrapper"
            style={{
              width: "50%",
            }}
          >
            <span style={{ fontWeight: "bold" }}>첨삭결과</span>
            <div
              className="gptResultBox"
              style={{
                width: "100%",
                padding: "2% 2%",
                border: "1px solid rgb(200,200,200)",
                boxShadow: "3px 3px 3px rgb(200,200,200)",
              }}
            >
              <span>
                첨삭결과가 여기에 나타납니다.{" "}
                <Button
                  onClick={() => {
                    let questionFormValues = questionForm.getFieldsValue(true);
                    let values = Object.values(questionFormValues);
                    console.log(questionFormValues);
                  }}
                >
                  테스트
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEdit;
