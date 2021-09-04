import React, { useEffect, useState, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

import firebase from "../lib/firebase";

const ViewCounter: FunctionComponent<{ id: string }> = ({ id }) => {
  const [views, setViews] = useState("");

  useEffect(() => {
    const onViews = (newViews): void => {
      setViews(newViews.val() === 1 ? 0 : newViews.val());
    };

    return (): void => {
      if (firebase) {
        firebase.ref("views").child(id).off("value", onViews);
      }
    };
  }, [id]);

  useEffect(() => {
    const registerView = (): Promise<Response> =>
      fetch(`/api/increment-views?id=${encodeURIComponent(id)}`);

    registerView();
  }, [id]);

  return (
    <CounterDisplay>
      <FontAwesomeIcon icon={faEye} style={{ marginRight: 10 }} />
      {views || `---`} views
    </CounterDisplay>
  );
};

export default ViewCounter;

const CounterDisplay = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
