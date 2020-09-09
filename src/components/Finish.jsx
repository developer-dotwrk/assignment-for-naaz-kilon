import React, { useEffect } from "react";
import finishPic from "../assets/pictures/finish.png";
import { lastStep } from "../selectors";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => ({ lastStep: lastStep(state) });

function Finish({ lastStep }) {
  const history = useHistory();
  useEffect(() => {
    lastStep !== -1 && history.push(`/step/${lastStep}`);
  }, [lastStep, history]);
  return (
    <div className="finish d-flex flex-column align-items-center justify-content-center">
      <img src={finishPic} alt="" />
      <div className="btn finish__btn d-flex align-items-center justify-content-center">
        DONE
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Finish);
