import React, { useState } from "react";

const Form = (props) => {
  const [txtAccessKeyID, settxtAccessKeyID] = useState(
    props.appdata.accessKeyID
  );
  const [txtSecretAccessKey, settxtSecretAccessKey] = useState(
    props.appdata.secretAccessKey
  );
  const [selectRegionID, setselectRegionID] = useState(props.appdata.regionID);

  const txtAccessKeyID_onchange = (event) => {
    settxtAccessKeyID(event.target.value);
  };

  const txtSecretAccessKey_onchange = (event) => {
    settxtSecretAccessKey(event.target.value);
  };

  const selectRegionID_onchange = (event) => {
    setselectRegionID(event.target.value);
  };

  const btn_click = (event) => {
    event.preventDefault();
    // event.stopPropagation();

    // console.log("🚀 ~ file: Form.js:19 ~ Form ~ event:", event);

    // console.log(txtAccessKeyID, txtSecretAccessKey, selectRegionID);

    props.onSave({
      accessKeyID: txtAccessKeyID,
      secretAccessKey: txtSecretAccessKey,
      regionID: selectRegionID,
    });
  };
  return (
    <>
      <form action="" method="post">
        <h2>表單</h2>
        <div>
          <label htmlFor="txtAccessKeyID">AccessKeyID</label>
          <input
            type="text"
            id="txtAccessKeyID"
            value={txtAccessKeyID}
            onChange={txtAccessKeyID_onchange}
          ></input>
        </div>
        <div>
          <label htmlFor="txtSecretAccessKey">SecretAccessKey</label>
          <input
            type="password"
            id="txtSecretAccessKey"
            value={txtSecretAccessKey}
            onChange={txtSecretAccessKey_onchange}
          ></input>
        </div>
        <div>
          <label htmlFor="selectRegionID">區域</label>
          <select
            id="selectRegionID"
            value={selectRegionID}
            onChange={selectRegionID_onchange}
          >
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>
        <div>
          <button onClick={btn_click}>確定 </button>
        </div>
      </form>
    </>
  );
};

export default Form;
