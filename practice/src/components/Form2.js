import React, { useRef, useState, useEffect } from "react";

const Form2 = () => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ file: Form2.js:5 ~ Form2 ~ count:", count);
  const refAccessKeyID = useRef();
  const refSecretAccessKey = useRef();
  const refRegionID = useRef();

  const btn_click = (event) => {
    event.preventDefault();
    console.log(refAccessKeyID.current.value);
    console.log(refSecretAccessKey.current.value);
    console.log(refRegionID.current.value);
  };

  useEffect(() => {
    console.log("ref changed");
  }, [refSecretAccessKey]);

  return (
    <>
      <form action="" method="post">
        <h2>表單</h2>
        <div>
          <label htmlFor="txtAccessKeyID">AccessKeyID</label>
          <input type="text" id="txtAccessKeyID" ref={refAccessKeyID}></input>
        </div>
        <div>
          <label htmlFor="txtSecretAccessKey">SecretAccessKey</label>
          <input
            type="password"
            id="txtSecretAccessKey"
            ref={refSecretAccessKey}
          ></input>
        </div>
        <div>
          <label htmlFor="selectRegionID">區域</label>
          <select id="selectRegionID" ref={refRegionID}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>
        <div>
          <button onClick={btn_click}>確定 </button>
        </div>
      </form>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
    </>
  );
};

export default Form2;
