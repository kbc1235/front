import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function InfinityScrolling() {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        alert("hi");
      },
      { threshold: 1 }
    );

    observer.observe(targetRef.current);

    () => observer && observer.disconnect();
  }, []);

  return (
    <div>
      <div.header>헤더</div.header>

      <div.content ref={targetRef}>콘텐츠</div.content>

      <div.footer>푸터</div.footer>
    </div>
  );
}

const div = {
  header: styled.div`
    height: 1000px;
    background-color: #eee;
  `,
  content: styled.div`
    height: 1000px;
    background-color: #e00;
  `,
  footer: styled.div`
    height: 200px;
    background-color: #08be08;
  `,
};
