// import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
//提交表单且数据验证成功/失败后回调事件
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const handleChange = (event) => {
//   console.log(
//     event.target.value
//   );
// };

const LogIn = () => {
  const [form] = Form.useForm();
  // const watchUserName = Form.useWatch("username", form);

  // const values = form.getFieldsValue();
  // console.log("⭐ ~ file: LogIn.js:19 ~ LogIn ~ values:", values);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const values = form.getFieldsValue();

  //     console.log("⭐ ~ file: LogIn.js:19 ~ LogIn ~ values:", values);
  //   }, 0);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* <Input onChange={handleChange} /> */}
      <div className="h-full w-full flex justify-center items-center p-8 ">
        <Form
          form={form}
          className="bg-[#f2e1b5] p-12 rounded-lg"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            initialValue=""
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default LogIn;
