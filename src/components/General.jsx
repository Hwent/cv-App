export default function General({ cv, setCv }) {
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setCv((draft) => {
      draft.general[field] = value;
    });
  };

  return (
    <div>
      <h2>General</h2>
      <form action="" method="post">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={cv.general.name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={cv.general.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={cv.general.phone}
          onChange={(e) => handleInputChange(e, "phone")}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={cv.general.address}
          onChange={(e) => handleInputChange(e, "address")}
        />
      </form>
      <div className="divider"></div>
    </div>
  );
}
