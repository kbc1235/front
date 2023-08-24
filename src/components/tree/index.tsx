import React, { useState } from "react";
import styled from "styled-components";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

// "DATA"를 활용하여 tree를 그리시오.
// 아이콘은 KeyboardArrowDown, KeyboardArrowUp 활용.

// + 우클릭 후 노드 추가삭제수정 기능

export default function Tree() {
  const DATA = [
    {
      text: "rootA",
      children: [
        { text: "sub-A1" },
        { text: "sub-A2" },
        { text: "sub-A3" },
        { text: "sub-A4" },
        {
          text: "sub-A5",
          state: false,
          children: [
            {
              text: "sub-A5A",
              children: [{ text: "sub-A5A1" }],
            },
            { text: "sub_A5B" },
          ],
        },
        { text: "sub-A6" },
        { text: "sub-A7" },
        { text: "sub-A8" },
        {
          text: "sub-A9",
          state: false,
          children: [{ text: "sub-A9A" }, { text: "sub-A9B" }],
        },
        { text: "sub-A10" },
        { text: "sub-A11" },
        { text: "sub-A12" },
      ],
    },
    {
      text: "rootB",
      state: false,
      children: [{ text: "sub-B1" }, { text: "sub-B2" }, { text: "sub-B3" }],
    },
  ];

  return (
    <div.treeBox>
      {DATA.map((data, i) => {
        const { text, state, children } = data;
        return (
          <div key={i}>
            {children && (
              <ChildrenBox
                text={text}
                state={state || false}
                children={children}
              />
            )}
          </div>
        );
      })}
    </div.treeBox>
  );
}

function ChildrenBox({
  text,
  state,
  children,
}: {
  text: string;
  state: boolean;
  children: any[];
}) {
  const [expand, setExpand] = useState(state);
  return (
    <div>
      {text}
      <button
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {expand ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </button>

      {expand
        ? children.map((data, i) => {
            return (
              <div key={i}>
                {text}

                {children && <ChildrenBox {...data} />}
              </div>
            );
          })
        : null}
    </div>
  );
}

const div = {
  treeBox: styled.div`
    & button + div {
      &:first-child {
        border: none;
      }
      margin-top: 30px;
      border: 1px solid;
    }
    & div + div {
      margin-top: 20px;
    }
  `,
};
