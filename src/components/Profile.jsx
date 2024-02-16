export default function Profile({ cv, setCv }) {
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setCv((draft) => {
      draft.profile = value;
    });
  };
  return (
    <div>
      <h2>Profile</h2>
      <textarea
        style={{ width: "80%", height: "120px" }}
        id="profile"
        name="profile"
        value={cv.profile}
        onChange={(e) => handleInputChange(e, "profile")}
      />
      <div className="divider"></div>
    </div>
  );
}
