import React, { useEffect, useState } from "react";
import { STEPS } from "../constants";
import { lastStep } from "../selectors";
import { connect } from "react-redux";

const currentBadgeStyle = {
  border: "2px solid white",
  transform: "scale(1.4)",
  lineHeight: "1.1rem",
};

const spacing = 20;

const mapStateToProps = (state, props) => ({
  ...props,
  lastStep: lastStep(state),
});

function Stepper({ step, lastStep }) {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const badges = [];
    for (let i = 1; i <= lastStep; i++) {
      badges.push(
        <div
          className="stepper__step-badge text-center"
          key={`badge${i}`}
          style={
            i === step
              ? {
                  ...currentBadgeStyle,
                  left: `calc(${
                    spacing / 2 + ((100 - spacing) / (STEPS - 1)) * (i - 1)
                  }% - 5px)`,
                }
              : {
                  left: `calc(${
                    spacing / 2 + ((100 - spacing) / (STEPS - 1)) * (i - 1)
                  }% - 5px)`,
                }
          }
        >
          {i}
        </div>
      );
    }
    setBadges(badges);
  }, [step]);

  return (
    <div className="stepper position-relative my-5">
      <div className="stepper__progress">
        <div
          className="stepper__progress-bar"
          style={{
            width: `${
              spacing / 2 + ((100 - spacing) / (STEPS - 1)) * (lastStep - 1)
            }%`,
          }}
        ></div>
      </div>
      {badges}
    </div>
  );
}

export default connect(mapStateToProps)(Stepper);
