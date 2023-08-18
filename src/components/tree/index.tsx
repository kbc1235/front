import React from "react";
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
                    state: "closed",
                    children: [{ text: "sub-A5A", children: [{ text: "sub-A5A1" }] }, { text: "sub_A5B" }],
                },
                { text: "sub-A6" },
                { text: "sub-A7" },
                { text: "sub-A8" },
                {
                    text: "sub-A9",
                    state: "closed",
                    children: [{ text: "sub-A9A" }, { text: "sub-A9B" }],
                },
                { text: "sub-A10" },
                { text: "sub-A11" },
                { text: "sub-A12" },
            ],
        },
        {
            text: "rootB",
            state: "closed",
            children: [{ text: "sub-B1" }, { text: "sub-B2" }, { text: "sub-B3" }],
        },
    ];
    const treeData = {
        names: [] as string[],
        values: [] as string[],
        depth03: [] as string[],
        state: [] as string[],
    };
    const { names, values } = DATA.reduce((data, item) => {
        data.names.push(item.text);
        data.values.push(item.state);
        return data;
    }, treeData);

    console.log(texts);
    return <div.treeBox>asdasd</div.treeBox>;
}

const div = {
    treeBox: styled.div`
        & > div + div {
            margin-top: 20px;
        }
    `,
    depth01: styled.div`
        display: flex;
        align-items: center;
    `,
    depth02: styled.div`
        display: flex;
        align-items: center;
    `,
};
