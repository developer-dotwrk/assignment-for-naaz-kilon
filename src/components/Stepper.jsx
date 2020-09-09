import React, { useEffect, useState } from "react";

const lastBadgeStyle = {
  border: "2px solid white",
  transform: "scale(1.4)",
};

export default function Stepper(props) {
  const { step } = props;
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const badges = [];
    for (let i = 1; i <= step; i++) {
      badges.push(
        <div
          className="stepper__step-badge text-center"
          key={`badge${i}`}
          style={
            i === step
              ? {
                  ...lastBadgeStyle,
                  left: `calc(${6 + 12 * (i - 1)}% - 5px)`,
                }
              : { left: `calc(${6 + 12 * (i - 1)}% - 5px)` }
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
          style={{ width: `${6 + 12 * (step - 1)}%` }}
        ></div>
      </div>
      {badges}
    </div>
  );
}
