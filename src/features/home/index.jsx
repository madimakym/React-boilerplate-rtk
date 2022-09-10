import { Helmet } from "react-helmet-async";

export function HomePage() {
  const handleSearch = (event) => {
    const { value } = event.target;

    console.log("value:", value);
    // if (value) {
    //   findByKey(value)
    //     .then((response) => {
    //       setContacts(response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // } else {
    //   fetchContacts();
    // }
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React application homepage" />
      </Helmet>
      <div className="home-page">
        <div className="form-wrapper">
          {/* <h1>React Repositories on Github</h1> */}
          <p>
            Search on GitHub the most starred repositories that use JavaScript ,
            and add the weekly download counts for each package from npmjs.org
          </p>
          <form>
            <input
              id="user-name"
              className="form-field"
              placeholder="Search"
              autocomplete="off"
              type="text"
              name="username"
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
    </>
  );
}
