export default function Logo({ size = 120 }) {
  const mainSize = Math.round(size * 0.12);
  const crewSize = Math.round(size * 0.075);

  return (
    <div className="logo" style={{ width: size, height: size }}>
      <div className="logo__inner">
        <div className="logo__lines">
          <span className="logo__line" />
          <span className="logo__line" />
        </div>
        <div className="logo__fortitude-wrapper">
          <div className="logo__banner" />
          <span className="logo__fortitude" style={{ fontSize: mainSize }}>
            FORTITUDE
          </span>
        </div>
        <div className="logo__crew-row">
          <span className="logo__dot" />
          <span className="logo__crew" style={{ fontSize: crewSize }}>
            .CREW
          </span>
          <span className="logo__dot" />
        </div>
      </div>
    </div>
  );
}
