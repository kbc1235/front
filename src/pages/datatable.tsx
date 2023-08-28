import { useState, useEffect, CSSProperties } from "react";
import { DataTable, DataTableType } from "../components/dataTable";
import axios from "axios";

export interface Column {
    id: string;
    label: string | JSX.Element;
    align: string;
    check?: (colum: Column, row: any) => JSX.Element;
    format?: (colum: Column, row: any) => JSX.Element;
}

export interface Column2 {
    checkBox: boolean;
    deptId: string;
    name: string;
    gender: string;
    region: string;
    siteId: string;
}

export default function DataTablePage() {
    const [checkItem, setCheckItem] = useState<string[]>([]);
    const handleCheck = (id: string): void => {
        if (checkItem.includes(id)) {
            setCheckItem(checkItem.filter((str) => str !== id));
        } else {
            setCheckItem((checkItem) => [...checkItem, id]);
        }
    };
    const handleAllCheck = (): void => {
        setCheckItem((prev) => {
            console.log(prev.length === 0);
            const allCheck = prev.length === 0 ? rows.map((item) => item.id) : [];
            return allCheck;
        });
    };
    const colums = [
        {
            id: "checkbox",
            label: <input type="checkbox" onChange={handleAllCheck} checked={checkItem.length === 0 ? false : true} />,
            align: "center",
            check: (colum, row) => {
                const checkbox = row.isCheck ? (
                    <input
                        type="checkbox"
                        checked={checkItem.includes(row.id)}
                        onChange={() => {
                            handleCheck(row.id);
                        }}
                    />
                ) : (
                    ""
                );
                return checkbox;
            },
        },
        { id: "name", label: "이름", align: "left" },
        { id: "old", label: "나이", align: "center" },
        { id: "skill", label: "스킬", align: "center" },
        {
            id: "isDev",
            label: "개발자",
            align: "center",
            format: (column, row) => {
                const text = row.isDev ? "개발자" : "머글";

                return text;
            },
        },
    ];
    const rows = [
        { id: "check01", isCheck: true, name: "이름", old: 11, skill: "리액트", isDev: true },
        { id: "check02", isCheck: true, name: "이름2", old: 11, skill: "퍼블", isDev: false },
        { id: "check03", isCheck: true, name: "이름", old: 11, skill: "리액트", isDev: true },
    ];

    const [list, setList] = useState<any[]>([]);
    const colums2 = [
        {
            checkBox: true,
            partnerId: "화사명",
            name: "이름",
            gender: "성별",
            region: "국가",
            siteId: "사이트",
        },
    ];
    const rows2 = list.map((item, index) => {
        return {
            checkBox: true,
            partnerId: item.partnerId,
            name: item.workerName,
            gender: item.genderName,
            region: item.region,
            siteId: item.siteId,
            siteWorkerId: item.siteWorkerId,
        };
    });

    const getList = async function () {
        const res = await axios.get("/api//v1/site/worker/getWorkerList", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZXZlbG9wQGRldmVsb3AuY29tIiwiY3UiOiJkZXZlbG9wIiwic2kiOiJTSVRFMjAyMzA1MTUwOTI3NDM1NzEiLCJrIjoiODIyY2RlZDUtNDU1Ny00YzQ2LWIwZmQtNmI2MmYyMTA0NGY2IiwiY28iOiJkZXZlbG9wIiwiZXhwIjoxNzI0NzQzODg0LCJpYXQiOjE2OTMyMDc4ODMsIm4iOiJkZXZlbG9wIOuMgO2RnCIsInV0IjoiTUFTVEVSIn0.knFN3s7V4Jq-IPkhGPTNrg1bp_hkX_MQREw2R8SaKw25Bk3RfbogQSBg3020eu-QgvYjmv3TMEXvOyiz6ScIig`,
            },
        });
        setList(res.data.data.list);
    };

    useEffect(() => {
        getList();
    }, []);
    console.log(list);

    return (
        <>
            {/* <DataTable Colums={colums as Column[]} Rows={rows} /> */}

            {rows2.map((data, i) => {
                return (
                    <div key={i}>
                        <span>{data.partnerId}</span>
                        <span>{data.name}</span>
                        <span>{data.gender}</span>
                        <span>{data.region}</span>
                        <span>{data.siteId}</span>
                    </div>
                );
            })}

            <DataTableType Column2={colums2 as Column2[]} Rows2={rows2} />
        </>
    );
}
