import React, { useReducer } from "react";
import { initialState, userReducer } from "./reducer/userReducer";

const Reducer = () => {
  // 다양한 컴포넌트 상황에 따라 상태를 다른 값으로 업데이트
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          placeholder="이름"
          value={state.name}
        />
        <input
          type="number"
          onChange={(e) => dispatch({ type: "SET_YEAR", payload: e.target.value })}
          placeholder="년도"
          value={state.year}
        />
      </div>
      {state.warning && <p>{state.warning}</p>}
      <p>Name : {state.name}</p>
      <p>Year : {state.year}</p>
    </div>
  );
};

export default Reducer;
