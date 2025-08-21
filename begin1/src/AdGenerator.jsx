import React, { useState } from "react";
import OpenAI from "openai";

async function ask_gpt(prompt) {
  const role_content =
    "당신은 최고의 카피라이터입니다. 사용자가 제시하는 내용을 참고해서 1~2줄 짜리 광고문구 5개 생성해주세요";

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "developer", content: role_content },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const AdGenerator = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    strength: "",
    tone: "",
    keyword: "",
    value: "",
  });
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const prompt = `
        - 제품명 : ${formData.name}
        - 브랜드명 : ${formData.brand}
        - 브랜드 핵심 가치 : ${formData.value}
        - 톤엔 매너 : ${formData.tone}
        - 필수 포함 키워드 : ${formData.keyword}
        - 제품특징 : ${formData.strength}
    `;
    try {
      setLoading(true);
      const data = await ask_gpt(prompt);
      const lines = data.split("\n").map((line) => line.trim());
      setAds(lines);
    } catch (error) {
      console.error("OPENAI 실패", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>광고문구 프로그램</h3>
      <hr className="border-1" />
      <form method="post" className="row mt-3" onSubmit={handelSubmit}>
        <div className="col-mb-6 mb-3">
          <label>제품명</label>
          <input type="text" className="form-control" value={formData.name} name="name" onChange={handelChange}></input>
        </div>
        <div className="col-mb-6 mb-3">
          <label>브랜드명</label>
          <input
            type="text"
            className="form-control"
            value={formData.brand}
            name="brand"
            onChange={handelChange}
          ></input>
        </div>
        <div className="col-mb-6 mb-3">
          <label>제품특징</label>
          <input
            type="text"
            className="form-control"
            value={formData.strength}
            name="strength"
            onChange={handelChange}
          ></input>
        </div>
        <div className="col-mb-6 mb-3">
          <label>톤앤매너</label>
          <input
            type="text"
            className="form-control"
            value={formData.tone}
            name="tone"
            onChange={handelChange}
            placeholder="발랄하게, 유머러스하게, 감성적으로, ..."
          ></input>
        </div>
        <div className="col-mb-6 mb-3">
          <label>필수포함키워드</label>
          <input
            type="text"
            className="form-control"
            value={formData.keyword}
            name="keyword"
            onChange={handelChange}
          ></input>
        </div>
        <div className="col-mb-6 mb-3">
          <label>브랜드핵심가치</label>
          <input
            type="text"
            className="form-control"
            value={formData.value}
            name="value"
            onChange={handelChange}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            {loading ? "생성중..." : "광고 문구 생성"}
          </button>
        </div>
      </form>
      {ads.length > 0 && (
        <div>
          <h4>생성된 광고 문구</h4>
          <ul>
            {ads.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdGenerator;
