import React from "react";

/**
 * Marco tipo ventana de editor / terminal (barra con 3 puntos, pestaña y meta).
 */
const Window = ({ title, meta, dotColor, className = "", bodyClassName = "", children, ...rest }) => (
  <div className={`window ${className}`} {...rest}>
    <div className="window-bar">
      <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
      {title && (
        <span className="window-tab">
          <span className="file-dot" style={dotColor ? { background: dotColor } : undefined} aria-hidden="true" />
          {title}
        </span>
      )}
      {meta && <span className="window-meta">{meta}</span>}
    </div>
    <div className={bodyClassName}>{children}</div>
  </div>
);

export default Window;
