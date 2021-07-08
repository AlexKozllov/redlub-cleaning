import React from "react";
import { StickyButtonStyles } from "./StickyButtonStyles";
import { useMouse } from "react-use";

const StickyButton = () => {
  const ref = React.useRef(null);
  const { elX, elY, elW, elH } = useMouse(ref);

  return (
    <StickyButtonStyles ref={ref} elX={elX} elY={elY} elW={elW} elH={elH}>
      <div className="btn-wrapper">
        <div className="btn-body">
          <span className="btn-text">Заказать уборку</span>
        </div>
      </div>
    </StickyButtonStyles>
  );
};

export default StickyButton;
