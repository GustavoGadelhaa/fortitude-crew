export default function Logo({ size = 120 }) {
  const fortitudeSize = Math.round(size * 0.3);
  const crewSize = Math.round(size * 0.18);

  return (
    <div className="logo">
      <div className="logo__lines" />
      <span
        className="logo__fortitude"
        style={{ fontSize: fortitudeSize }}
      >
        FORTITUDE
      </span>
      <span
        className="logo__crew"
        style={{ fontSize: crewSize }}
      >
        .CREW
      </span>
      <div className="logo__lines" />
    </div>
  );
}
