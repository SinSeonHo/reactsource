import React, { useState } from "react";

const InputMultipleSample = () => {
  // const[name, setName]= useState();
  // const[nickName, setNickName] = useState();

  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = inputs;

  const handleChanged = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInputs({
      // 먼저 수정된 값 복제
      ...inputs,
      // 변경된 값 변화
      [name]: value,
    });
  };

  const handelReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="이름" name="name" onChange={handleChanged} value={name} />
      </div>
      <div>
        <input type="text" placeholder="닉네임" name="nickName" onChange={handleChanged} value={nickName} />
      </div>
      <div>
        <button onClick={handelReset}>초기화</button>
      </div>
      <div>
        <h4>
          입력값 : {name}({nickName})
        </h4>
      </div>
    </div>
  );
};

export default InputMultipleSample;
