import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function InfinityScrolling() {
  const [target, setTarget] = useState();

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target) {
      observer = new IntersectionObserver(
        () => {
          alert("hi");
        },
        { threshold: 1 }
      );

      observer.observe(target);
    }

    () => {
      observer && observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div>헤더</div>

      <div.content className="content">콘텐츠</div.content>

      <div>푸터</div>
    </div>
  );
}

const div = {
  content: styled.div``,
};
